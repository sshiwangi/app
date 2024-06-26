'use client';

import { useState } from 'react';
import { Message, continueConversation } from '../lib/actions';
import { readStreamableValue } from 'ai/rsc';
import Sidebar from '@/components/Sidebar';
import Input from '@/components/Input';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function Home() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  return (
    <Sidebar>
      <div>
        {conversation.map((message, index) => (
          <div key={index}>
            {message.role}: {message.content}
          </div>
        ))}
      </div>

      <>
        <Input
          value={input}
          onChange={event => {
            setInput(event.target.value);
          }}
          onClick={async () => {
            const { messages, newMessage } = await continueConversation([
              ...conversation,
              { role: 'user', content: input },
            ]);

            let textContent = '';

            for await (const delta of readStreamableValue(newMessage)) {
              textContent = `${textContent}${delta}`;

              setConversation([
                ...messages,
                { role: 'assistant', content: textContent },
              ]);
            }
          }}
        />
     
      </>
    </Sidebar>
  );
}