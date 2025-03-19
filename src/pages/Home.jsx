import { useState, useEffect} from 'react'

function Home() {
  const [currentCard, setCurrentCard] = useState("Choose")
  const [currentTask, setCurrentTask] = useState("")

  const truths = [
    "How are you?",
    "Where are you?",
    "What are you doing?",
    "What is your name?",
    "What is your age?",
    "Where are you from?",
  ]

  const dares = [
    "Sing for a minute",
    "Dance for a minute",
    "Run for a minute",
    "Jump for a minute",
    "Climb a tree for a minute",
    "Cry for a minute",
  ]
  
  const updateTask = (nextCard) => {
    if (nextCard === "Random") {
      nextCard = Math.random() > 0.5 ? "Truth" : "Dare"
    }

    if (nextCard === "Truth") {
      setCurrentCard("Truth")
      setCurrentTask(truths[Math.floor(Math.random() * truths.length)])
    } else if (nextCard === "Dare") {
      setCurrentCard("Dare")
      setCurrentTask(dares[Math.floor(Math.random() * dares.length)])
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-dvh flex-col">
        <div className="card bg-base-300 w-5/6 md:w-7/12 lg:w-2/7 h-1/2 shadow-2xl hover:shadow-3xl hover:shadow-primary transition-all duration-500">
          <div className="card-body">
            <h2 className="card-title">
              <p className="text-center text-secondary">
                { currentCard }
              </p>
            </h2>
            
            <p className="text-center">
              { currentTask }
            </p>
          </div>
        </div>

        <div className="flex card-actions justify-evenly pt-5">
            <button className="btn btn-md lg:btn-lg btn-soft btn-primary" onClick={() => updateTask("Truth")}>Next Truth</button>
            <button className="btn btn-md lg:btn-lg btn-soft btn-primary" onClick={() => updateTask("Random")}>Next Random</button>
            <button className="btn btn-md lg:btn-lg btn-soft btn-primary" onClick={() => updateTask("Dare")}>Next Dare</button>
        </div>
      </div>
    </>
  )
}

export default Home
