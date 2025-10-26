import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Envoi d'email via Resend
    try {
      const data = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'cheickhamed2780@gmail.com',
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                  background-color: #f9fafb;
                  margin: 0;
                  padding: 20px;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background: white;
                  border-radius: 8px;
                  overflow: hidden;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                .header {
                  background: linear-gradient(135deg, #e50914 0%, #b20710 100%);
                  padding: 30px;
                  text-align: center;
                }
                .header h1 {
                  margin: 0;
                  color: white;
                  font-size: 24px;
                }
                .content {
                  padding: 30px;
                }
                .field {
                  margin-bottom: 20px;
                }
                .label {
                  font-weight: 600;
                  color: #374151;
                  font-size: 14px;
                  margin-bottom: 5px;
                }
                .value {
                  color: #1f2937;
                  font-size: 16px;
                  line-height: 1.6;
                }
                .message-box {
                  background: #f9fafb;
                  padding: 20px;
                  border-radius: 6px;
                  border-left: 4px solid #e50914;
                  margin-top: 10px;
                }
                .footer {
                  background: #f9fafb;
                  padding: 20px;
                  text-align: center;
                  font-size: 12px;
                  color: #6b7280;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>📬 Nouveau Message de Contact</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">De :</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email :</div>
                    <div class="value"><a href="mailto:${email}" style="color: #e50914;">${email}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Sujet :</div>
                    <div class="value">${subject}</div>
                  </div>
                  <div class="field">
                    <div class="label">Message :</div>
                    <div class="message-box">
                      ${message.replace(/\n/g, '<br>')}
                    </div>
                  </div>
                </div>
                <div class="footer">
                  Message reçu depuis votre portfolio - ${new Date().toLocaleDateString('fr-FR')}
                </div>
              </div>
            </body>
          </html>
        `,
      })

      console.log('✅ Email envoyé via Resend:', data)

      return NextResponse.json(
        { success: true, message: 'Message envoyé avec succès' },
        { status: 200 }
      )

    } catch (emailError) {
      console.error('❌ Erreur Resend:', emailError)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('❌ Erreur API contact:', error)
    return NextResponse.json(
      { error: 'Erreur serveur. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
