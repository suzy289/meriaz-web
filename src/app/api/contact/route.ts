import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactFormSchema.parse(body)

    // Check honeypot field (anti-spam)
    if (validatedData.honeypot) {
      return NextResponse.json(
        { error: 'Spam détecté' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store the lead in a database
    // 3. Send a WhatsApp notification

    // For now, we'll just log the data and return success
    console.log('New contact form submission:', {
      fullName: validatedData.fullName,
      company: validatedData.company,
      email: validatedData.email,
      whatsapp: validatedData.whatsapp,
      projectType: validatedData.projectType,
      budget: validatedData.budget,
      message: validatedData.message,
      contactByWhatsapp: validatedData.contactByWhatsapp,
      timestamp: new Date().toISOString(),
    })

    // Example: Send email with SendGrid/Resend
    // await sendEmail({
    //   to: 'contact@meriaz.com',
    //   subject: `Nouvelle demande de ${validatedData.fullName}`,
    //   body: `...`
    // })

    // Example: Store in database
    // await db.leads.create({
    //   data: validatedData
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre demande a été envoyée avec succès. Nous vous recontactons rapidement !' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Données invalides', details: error },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}

