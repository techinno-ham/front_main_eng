async function postData() {
    try {
        var token = document
            .getElementById("myScript")
            .getAttribute("data-token")

        if (!token)
            token =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiYm90SWQiOiJjNjhhZjUxMC04YTU3LTRjMDMtYmVhOC0zYTJlMDQzY2UyMzkifSwiaWF0IjoxNzI0NTAyNTAyLCJleHAiOjE3MjcwOTQ1MDJ9.pSiO4ml8cH7yba83-T-RK_6JU1TnVSt5Y1biZPHNbyY"

        // Create the JSON payload
        var payload = {
            token: token,
        }

        const response = await fetch(
            "http://localhost:12000/v1/widget/get-collection",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            },
        )

        const data = await response.json();

        console.log(data,"testt")

        window.localStorage.setItem("chat-bot-token", data.collection)
    } catch (error) {
        console.error("Error:", error)
    }

    if (!window.localStorage.getItem("chat-bot-token")) {
        window.localStorage.setItem("chat-bot-token", "plotset2")
    }

    let container = document.createElement("div")
    container.id = "chatbotContainer"
    container.style.direction = "ltr"
    document.body.appendChild(container)

    var cssLink = document.createElement("link")
    cssLink.rel = "stylesheet"
    cssLink.href = `${window.location.protocol}//${window.location.host}/scripts/main.3d20f9a1.css`
    document.head.appendChild(cssLink)

    // Load JS
    var jsScript = document.createElement("script")
    jsScript.src = `${window.location.protocol}//${window.location.host}/scripts/main.5c4c6e25.js`
    document.body.appendChild(jsScript)
}

postData()
