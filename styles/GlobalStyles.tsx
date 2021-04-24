import React from 'react'

export function GlobalStyles() {
  return (
    <style jsx global>
      {`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #__next {
          min-height: 100vh;
          height: auto;
          width: 100%;
        }
      `}
    </style>
  )
}
