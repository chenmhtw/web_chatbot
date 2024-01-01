const chatInput = document.querySelector("#chat_input");
const sendButton = document.querySelector("#send_btn");
const chatcontainer = document.querySelector(".chat_container");

let usertext = null;

const createElement = (html, className) => {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", className);
    chatDiv.innerHTML = html;
    return chatDiv;
}

const showTypingAnimation = () => {
    usertext = chatInput.value.trim();
    const html = `<div class="chat_content">
                    <div class="chat_details">
                        <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
                        <div class="typing_ani">
                            <div class="typing_dot" style="--delay: 0.2s"></div>
                            <div class="typing_dot" style="--delay: 0.3s"></div>
                            <div class="typing_dot" style="--delay: 0.4s"></div>
                        </div>  
                    </div>
                </div>`;
    const outgoingchatdiv = createElement(html, "incoming");
    chatcontainer.appendChild(outgoingchatdiv);
}

const handleoutgoingchat = () => {
    usertext = chatInput.value.trim();
    const html = `<div class="chat_content">
                    <div class="chat_details">
                        <span class="material-symbols-outlined">support_agent</span>
                        <p>${usertext}</p>
                    </div>
                </div>`;
    const outgoingchatdiv = createElement(html, "outgoing");
    chatcontainer.appendChild(outgoingchatdiv);
    setTimeout(showTypingAnimation, 500);
}
 
sendButton.addEventListener('click', handleoutgoingchat);
