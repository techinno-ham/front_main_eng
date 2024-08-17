async function postData() {
    try {
        var token = document
            .getElementById("myScript")
            .getAttribute("data-token")

        if (!token)
            token =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiYm90SWQiOiJjNDYzMDJhNC1jNmY5LTQ2YzYtOTJkZC04Y2NiZDhlOTlmMmUifSwiaWF0IjoxNzIzODg4NzE1LCJleHAiOjE3MjY0ODA3MTV9.DtB_sV1Cgc5g56dIrLWIEqu25zKGoYE1ahs7Q-LStZk"

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
    container.id = "plotsetCustomId"
    container.style.direction = "ltr"
    document.body.appendChild(container)

    var cssLink = document.createElement("link")
    cssLink.rel = "stylesheet"
    cssLink.href = `${window.location.protocol}//${window.location.host}/scripts/main.1267c309.css`
    document.head.appendChild(cssLink)

    // Load JS
    var jsScript = document.createElement("script")
    jsScript.src = `${window.location.protocol}//${window.location.host}/scripts/main.b4c5a894.js`
    document.body.appendChild(jsScript)
}

postData()
