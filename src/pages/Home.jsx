import { useState, useEffect } from 'react';
import supabase from '../supabase-client';

function Home() {
  const [currentCard, setCurrentCard] = useState("Choose");
  const [currentTask, setCurrentTask] = useState("");
  const [session, setSession] = useState(null)
  const [displayTask, setDisplayTask] = useState(""); // Текст с анимацией

  const truths = [
    "How are you?",
    "Where are you?",
    "What are you doing?",
    "What is your name?",
    "What is your age?",
    "Where are you from?",
  ];

  const dares = [
    "Sing for a minute",
    "Dance for a minute",
    "Run for a minute",
    "Jump for a minute",
    "Climb a tree for a minute",
    "Cry for a minute",
  ];

  const updateTask = (nextCard) => {
    if (nextCard === "Random") {
      nextCard = Math.random() > 0.5 ? "Truth" : "Dare";
    }

    if (nextCard === "Truth") {
      setCurrentCard("Truth");
      setCurrentTask(truths[Math.floor(Math.random() * truths.length)]);
    } else if (nextCard === "Dare") {
      setCurrentCard("Dare");
      setCurrentTask(dares[Math.floor(Math.random() * dares.length)]);
    }
  };

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= currentTask.length) {
        setDisplayTask(currentTask.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30); // Скорость печатания (ms на символ)

    return () => clearInterval(interval);
  }, [currentTask]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <>
      <div className="flex justify-center items-center h-dvh flex-col">
        {session?.user && <p className="text-2xl md:text-3xl mb-5">Hello, {session?.user?.user_metadata?.full_name}</p>}
        <div className="card z-0 bg-base-300 w-5/6 md:w-7/12 lg:w-3/7 h-1/2 shadow-2xl hover:shadow-primary transition-all duration-500">
          <div className="card-body">
            <h2 className="card-title">
              <p className="text-center text-secondary text-3xl">
                {currentCard}
              </p>
            </h2>

            <p className="text-center typing-animation text-base">
              {displayTask}
            </p>
          </div>
        </div>

        <div className="flex card-actions justify-evenly pt-10">
          <button className="btn btn-md md:btn-lg btn-soft btn-primary" onClick={() => updateTask("Truth")}>Next Truth</button>
          <button className="btn btn-md md:btn-lg btn-soft btn-info" onClick={() => updateTask("Random")}>Next Random</button>
          <button className="btn btn-md md:btn-lg btn-soft btn-secondary" onClick={() => updateTask("Dare")}>Next Dare</button>
        </div>
      </div>
    </>
  );
}

export default Home;