import React, { useState } from "react";


const UploadAudio = () => {

    const [title, setTitle] = useState("");
    const [audio, setAudio] = useState(null);

    const handleSubmit = e => {
        e.preventDefault()
        console.log("trate de subir archivo")
        const formData = new FormData()
        formData.append("title", title);
        formData.append("audio", audio)

        // fetch("https://3000-jonpobdum-4geeksfinalba-edkpdthhc6s.ws-us74.gitpod.io/api/upload", //
        
        fetch("https://3000-jonpobdum-4geeksfinalba-8eldyb34hh8.ws-us74.gitpod.io/api/upload",{    
        
        method: 'POST',
            body: formData,
            mode: "cors",
        })
            .then(resp => resp.json())
            .then(data => console.log(data))

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setTitle(e.target.value)} />
                <input type="file" onChange={e => setAudio(e.target.files[0])} />
                <button>Enviar</button>
            </form>
        </>
    )
}

export default UploadAudio;
