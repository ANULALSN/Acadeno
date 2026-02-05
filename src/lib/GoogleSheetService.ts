export const submitToGoogleSheets = async (data: any) => {
    const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

    if (!scriptURL) {
        console.warn("SheetDB URL is not configured in .env.local");
        return { result: "error", error: "Configuration Missing" };
    }

    // SheetDB is Case Sensitive! Use exact header names from the Sheet.
    const payload = {
        data: [
            {
                "Timestamp": new Date().toLocaleString(),
                "Name": data.name,
                "Phone": data.phone,
                "Course": data.course,
                "Message": data.message
            }
        ]
    };

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        // SheetDB returns the created row(s) on success, or an error object
        if (response.ok) {
            return { result: "success", data: result };
        } else {
            return { result: "error", error: result.error || "Submission Failed" };
        }
    } catch (error) {
        console.error("Error submitting to SheetDB:", error);
        return { result: "error", error };
    }
};
