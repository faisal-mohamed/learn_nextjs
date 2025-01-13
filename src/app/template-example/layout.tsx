"use client";

import { useState } from 'react';
import React from 'react'

const layout = ({children}) => {

    const [state, setState] = useState("")
  return (
    <div>
        <div>layout</div>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />

        {children}
    </div>
  )
}

export default layout