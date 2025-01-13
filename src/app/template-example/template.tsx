"use client";

import { useState } from "react";

export default function TemplatePage({children}) {


    const [state, setState] = useState("")
      return <div>
            <div>layout</div>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="template"/>
    
            {children}
        </div>
}