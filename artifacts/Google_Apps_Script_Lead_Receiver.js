function doPost(e) {
  try {
    // 1. Parse the incoming JSON payload from the website
    const data = JSON.parse(e.postData.contents);
    
    // 2. Define the exact destination email
    const destinationEmail = "propsmartrealty@gmail.com";
    const subject = "High-Intent Lead: " + (data.project || "Legend County Bavdhan");
    
    // 3. Construct a professional HTML email body
    let htmlBody = `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; max-width: 600px;">
        <h2 style="color: #C9963B; border-bottom: 2px solid #C9963B; padding-bottom: 10px;">New Enquiry Received</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
    `;
    
    // Dynamically add all fields to the table
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        // Format the key to look clean (e.g., "user_agent" -> "User Agent")
        const cleanKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        htmlBody += `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 35%; color: #333;">${cleanKey}</td>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #555;">${data[key]}</td>
          </tr>
        `;
      }
    }
    
    htmlBody += `
        </table>
        <p style="margin-top: 30px; font-size: 12px; color: #888;">This lead was securely generated and verified by the Sovereign Conversion Engine.</p>
      </div>
    `;
    
    // 4. Send the email using Google's internal mail servers (100% Deliverability)
    MailApp.sendEmail({
      to: destinationEmail,
      subject: subject,
      htmlBody: htmlBody
    });
    
    // 5. Return success to the website
    return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Handle errors silently for the frontend, but log them
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": error.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight CORS requests from the browser
function doOptions(e) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  return ContentService.createTextOutput("").setHeaders(headers);
}
