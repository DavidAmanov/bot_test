import BotHubModule from './BotHub.module.css'
import avatar from '../../../img/avatar.svg'
import gemini from '../../../img/gemini.svg'
import user from '../../../img/default-avatar.svg'
import Button from '../../button/Button'
import send from '../../../img/send.svg'
import { openai } from '../../../api/gemini.api'
import { useState } from 'react'

interface Message {
    role: "system" | "user" | "assistant";
    content: string;
  }

const BotHub: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
      { role: "assistant", content: "Вы Привет! Чем я могу помочь?" }
    ]);
    const [input, setInput] = useState("");
  
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const newMessage: Message = { role: "user", content: input };
      setMessages([...messages, newMessage]);
      setInput("");
  
      try {
        const completion = await openai.createChatCompletion({
          messages: [...messages, newMessage],
          model: "gemini-pro",
        });
        const responseMessage = (await completion.json()).choices[0].message.content;
  
        setMessages([...messages, newMessage, { role: "assistant", content: responseMessage } as Message]);
      } catch (error) {
        console.error("Error fetching response:", error);
        setMessages([...messages, newMessage, { role: "assistant", content: "Ошибка при получении ответа от модели." } as Message]);
      }
    };
  
    return (
      <div className={BotHubModule.content__wrapper}>
        <div className={BotHubModule.chat__name}>
          <div className={BotHubModule.chat__name__avatar}>
            <img src={avatar} alt="avatar" />
            <div className={BotHubModule.chat__name__avatar__text}>
              <h4>BotHub: ChatGPT & Midjourney</h4>
              <span>bot</span>
            </div>
          </div>
          <div className={BotHubModule.chat__name__checkbox}>
            <span>Сохранить контекст</span>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
        <div className={BotHubModule.chat__field}>
          {messages.map((message, index) => (
            <div key={index} className={message.role === "assistant" ? BotHubModule.gemini__message : ''}>
              {message.role === "assistant" && (<span>"Gemini"</span>)}
              <div className={message.role === "assistant" ? BotHubModule.gemini__message__text : BotHubModule.user__message}>
                <img src={message.role === "assistant" ? gemini : user} alt={message.role} />
                <span>{message.content}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={BotHubModule.input__field}>
          <div className={BotHubModule.input__wrapper}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Спроси о чем-нибудь...'
            />
            <Button width={"40px"} img={send} onClick1={handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
  
  export default BotHub;