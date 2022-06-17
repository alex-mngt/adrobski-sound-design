import Ajv, { JSONSchemaType, Schema } from 'ajv';
import addFormats from 'ajv-formats';
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail, { MailDataRequired } from '@sendgrid/mail';
import {
  generateContactDrobEmail,
  generateContactEmail,
} from '../../helpers/emails';

interface IError {
  message: string;
}

interface IEmail {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface EmailRequest extends NextApiRequest {
  body: IEmail;
}

const schema: JSONSchemaType<IEmail> = {
  type: 'object',
  properties: {
    firstName: { type: 'string', nullable: false },
    lastName: { type: 'string', nullable: false },
    email: { type: 'string', format: 'email', nullable: false },
    message: { type: 'string', nullable: false },
  },
  required: ['firstName', 'lastName', 'email', 'message'],
  additionalProperties: false,
};

const handler = async (
  req: EmailRequest,
  res: NextApiResponse<void | IError>,
) => {
  const { method, body } = req;

  if (method === 'POST') {
    const avj = new Ajv();
    addFormats(avj, ['email']);

    const validate = avj.compile(schema);
    const valid = validate(body);

    if (!valid) {
      if (!Array.isArray(validate.errors)) {
        return;
      }

      res.status(400).json({
        message: `${validate.errors[0].instancePath.slice(1)} ${
          validate.errors[0].message
        }`,
      });
    }

    const contactMessage: MailDataRequired = {
      to: body.email,
      from: process.env.CONTACT_EMAIL || 'contact@adrobski.fr',
      subject: 'Contact',
      text: `You've just reached out Adrobski with the following message : ${body.message}. He'll respond as fast as he can. You can also reach him on instagram (https://www.instagram.com/adrobskimusic/?hl=fr) or twitter (https://twitter.com/adrobskimusic)`,
      html: generateContactEmail(body.message),
    };

    const adsMessage: MailDataRequired = {
      to: process.env.ADROBSKI_EMAIL || 'adrobskimusic@gmail.com',
      from: process.env.CONTACT_EMAIL || 'contact@adrobski.fr',
      subject: 'Contact',
      text: `You've got a message from ${body.firstName} ${body.lastName} (${body.email}) : ${body.message}`,
      html: generateContactDrobEmail(
        body.firstName,
        body.lastName,
        body.email,
        body.message,
      ),
    };

    const messages = [contactMessage, adsMessage];

    sgMail.setApiKey(process.env.SENGRID_API_KEY || '');

    await sgMail.send(messages).catch(err => {
      console.log(err);

      if (err.response) {
        console.log(err.response.body);
      }

      res
        .status(500)
        .json({ message: `Email service is temporary unavailable` });
    });

    res.status(200).emit;
  }
};

export default handler;
