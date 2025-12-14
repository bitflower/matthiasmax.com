import { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Get the file path from query parameter
  const { file } = req.query;

  // Only allow access to hvhalrbls folder files
  if (!file || typeof file !== 'string' || !file.startsWith('hvhalrbls/')) {
    return res.status(400).json({ error: 'Invalid file path' });
  }

  // Check basic authentication
  const basicAuth = req.headers.authorization;

  if (!basicAuth || !basicAuth.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Restricted Access"');
    return res.status(401).send('Authentication required');
  }

  // Decode and verify credentials
  const authValue = basicAuth.split(' ')[1];
  const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');

  if (user !== 'admin' || pwd !== '/E4Z1hJ99WCmc75g') {
    res.setHeader('WWW-Authenticate', 'Basic realm="Restricted Access"');
    return res.status(401).send('Invalid credentials');
  }

  // Serve the file from protected-files directory
  const filePath = join(process.cwd(), 'protected-files', file);

  if (!existsSync(filePath)) {
    return res.status(404).send('File not found');
  }

  try {
    const fileBuffer = readFileSync(filePath);
    const fileName = file.split('/').pop();

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    return res.send(fileBuffer);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading file' });
  }
}
