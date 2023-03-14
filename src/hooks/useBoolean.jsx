import React, { useBoolean} from "react"

export default function Example() {
  const [flag, setFlag] = useBoolean()

  return (
    <>
      <p>Boolean state: {flag.toString()}</p>
      <button onClick={setFlag.toggle}>
        Click me to toggle the boolean value
      </button>
    </>
  )
}

