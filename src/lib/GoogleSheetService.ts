export const submitToGoogleSheets = async (data: any) => {
    const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

    if (!scriptURL || scriptURL.includes('YOUR_SHEET_WEB_APP_URL_HERE')) {
        console.warn("Google Sheets URL is not configured in .env.local");
        return { result: "error", error: "Configuration Missing" };
    }

    try {
        const formData = new FormData();
        Object.keys(data).forEach(key => formData.append(key, data[key]));

        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Important for Google Apps Script
        });

        // With no-cors, we can't check response.ok, so we assume success if no error thrown
        return { result: "success" };
    } catch (error) {
        console.error("Error submitting to Google Sheets:", error);
        return { result: "error", error };
    }
};
