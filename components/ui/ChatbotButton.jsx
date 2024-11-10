'use client';

export default function ChatbotButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button className="btn btn-primary rounded-full shadow-lg">
        <span className="text-lg">💬</span>
      </button>
    </div>
  );
}