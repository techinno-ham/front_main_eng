async function postData() {
    try {
        var token = document
            .getElementById("myScript")
            .getAttribute("data-token")

        if (!token)
            token =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJwbG90c2V0MSIsImJvdElkIjoicGxvdHNldDEiLCJpYXQiOjE3MTYwMTkyMDUsImV4cCI6MTcxNjEwMDIwNX0.NxFr4UwGyXZDFpHj-glHJtkU8dpnyqk5vVPv8sqLMDo"

        // Create the JSON payload
        var payload = {
            token: token,
        }

        const response = await fetch(
            "http://localhost:12000/widget/get-collection",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            },
        )

        const data = await response.json()

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
    cssLink.href = "http://localhost:3000/scripts/main.1267c309.css"
    document.head.appendChild(cssLink)

    // Load JS
    var jsScript = document.createElement("script")
    jsScript.src = "http://localhost:3000/scripts/main.b4c5a894.js"
    document.body.appendChild(jsScript)
}

postData()
