import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { name, email, pickup, dropoff, info } = req.body;

    try {
        const data = await resend.emails.send({
            from: 'Akmad Logistics <noreply@akmadlogistics.com>',
            to: 'tjnakeem@gmail.com',
            subject: 'New Quote Request',
            html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pickup:</strong> ${pickup}</p>
        <p><strong>Drop-off:</strong> ${dropoff}</p>
        <p><strong>Additional Info:</strong> ${info}</p>
      `,
        });

        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
}
}
