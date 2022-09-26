import palavras from "./Palavras";
import alfabeto from "./Alfabeto";
import React, { useState } from "react";

const imagens = ["./assets/forca0.png","./assets/forca1.png","./assets/forca2.png","./assets/forca3.png","./assets/forca4.png","./assets/forca5.png","./assets/forca6.png"];

export default function App (){

    const [palavra,setPalavra] = useState("");
    let palavraArray = palavra.split("");
    const excluidas = [];
    const acertadas = [];

    const [erro,setErro] = useState(0);
    const [forca,setForca] = useState(imagens[erro]);
    const [chute,setChute] = useState("");

    const [palavraEscolhida,setPalavraEscolhida] = useState("");
    const [escolherPalavra,setEscolherPalavra] = useState(<button data-identifier="choose-word" onClick={comecarJogo}>Escolher Palavra</button>);
    const [letras,setLetras] = useState(alfabeto.map((l,index) => <li key={index} data-identifier="letter">{l}</li>));
    //const [input,setInput] = useState(<input disabled type="text" data-identifier="type-guess"/>);
    const [botaoInput,setBotaoInput] = useState(<button data-identifier="guess-button">Chutar</button>)

    function ganhouJogo(){
        setChute("");
        alert("Você ganhou");
    }

    function perdeuJogo(){
        setPalavraEscolhida(palavraArray.map((p,index) => (<li className="perdeu" key={index}><p>{p}</p></li>)));
        setChute("");
        alert("Você perdeu");
    }

    let cont = 0;
    function acertou (lett){
        acertadas.push(lett);
        setPalavraEscolhida(palavraArray.map((p,index) => (acertadas.includes(p)) ? <li key={index}><p>{p}</p></li> : <li key={index}><p>_</p></li>))
        excluidas.push(lett);
        setLetras(alfabeto.map((l,index) => (excluidas.includes(l)) ? <li key={index} data-identifier="letter">{l}</li> : <li className="ativada" onClick={palavraArray.includes(l) ? () => acertou(l) : () => errou(l)} key={index} data-identifier="letter">{l}</li>));
        cont++
        console.log(lett);
        console.log("Acertei",cont);
    }

    let novoErro = 0;
    function errou (lett){
        excluidas.push(lett);
        setLetras(alfabeto.map((l,index) => (excluidas.includes(l)) ? <li key={index} data-identifier="letter">{l}</li> : <li className="ativada" onClick={palavraArray.includes(l) ? () => acertou(l) : () => errou(l)} key={index} data-identifier="letter">{l}</li>));

        if (novoErro === 5){
            novoErro++
            setErro(novoErro);
            
            const novaImagem = imagens[novoErro];
            setForca(novaImagem);
            perdeuJogo();
        }else if (novoErro === 6){
            perdeuJogo();
        }else{
            novoErro++
            setErro(novoErro);
            
            const novaImagem = imagens[novoErro];
            setForca(novaImagem);
            console.log("errou");
        }
    }

    function comecarJogo(){

        const novaPalavra = palavras[Math.floor(Math.random() * (palavras.length + 1))];

        setPalavra(novaPalavra);

        palavraArray = novaPalavra.split("");

        setPalavraEscolhida(palavraArray.map((p,index) => <li key={index}><p>_</p></li>));

        setEscolherPalavra(<button data-identifier="choose-word">Escolher Palavra</button>);

        setLetras(alfabeto.map((l,index) => <li className="ativada" onClick={palavraArray.includes(l) ? () => acertou(l) : () => errou(l)} key={index} data-identifier="letter">{l}</li>));

        //setInput(<input type="text" data-identifier="type-guess" value={chute} onChange={e => setChute(e.target.value)}/>);

        setBotaoInput(<button data-identifier="guess-button" onClick={palavra === chute ? ganhouJogo : perdeuJogo}>Chutar</button>);
    }

    function Superior(){
        return(
            <div className="superior">
                <img src={forca} alt="Forca" data-identifier="game-image"></img>
                <div className="sistemaPalavra">
                    {escolherPalavra}
                    <ul className="palavra" data-identifier="word">
                    {palavraEscolhida}
                    </ul>
                </div>
            </div>
        )
    }

    function Letras(){
        return(
            <ul className="letras">
                {letras}
            </ul>
        )
    }

    function Chute(){
        return(
            <div className="chute">
                <span>Já sei a palavra!</span>
                <input type="text" data-identifier="type-guess" value={chute} onChange={e => setChute(e.target.value)}/>
                {botaoInput}
            </div>
        )
    }

    return(
        <>
            <Superior/>
            <Letras />
            <Chute />
        </>
    )
}

