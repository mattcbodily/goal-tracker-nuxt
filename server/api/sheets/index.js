import { google } from 'googleapis'

export default defineEventHandler(async (event) => {
  const { API_KEY, CLIENT_EMAIL, CLIENT_ID, SHEET_ID } = useRuntimeConfig(event).public

  const query = getQuery(event)

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: CLIENT_EMAIL,
      client_id: CLIENT_ID,
      private_key: API_KEY.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  })

  const sheets = google.sheets({
    auth,
    version: 'v4',
  })

  const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${query.from}:${query.to}`,
  })

  return response.data.values
})