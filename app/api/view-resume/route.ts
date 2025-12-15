import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'jayakishan-resume.pdf');
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Jayakishan-Resume.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse('File not found', { status: 404 });
  }
}