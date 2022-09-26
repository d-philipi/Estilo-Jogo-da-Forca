import palavras from "./Palavras";
import alfabeto from "./Alfabeto";
import React, { useState } from "react";

const imagens = ["./assets/forca0.png","./assets/forca1.png","./assets/forca2.png","./assets/forca3.png","./assets/forca4.png","./assets/forca5.png","./assets/forca6.png"];

export default function App (){

    const [palavra,setPalavra] = useState("");
    const palavraArray = palavra.split("");

    const [erro,setErro] = useState(0);
    const [forca,setForca] = useState(imagens[erro]);
    const [chute,setChute] = useState("");
    const [atividade,setAtividade] = useState("inativa")

    const [escolherPalavra,setEscolherPalavra] = useState(<button data-identifier="choose-word" onClick={comecarJogo}>Escolher Palavra</button>);
    const [letras,setLetras] = useState(alfabeto.map((l,index) => <li className={atividade} key={index} data-identifier="letter">{l}</li>));
    const [input,setInput] = useState(<input disabled type="text" data-identifier="type-guess" value={chute} onChange={e => setChute(e.target.value)}/>);
    const [botaoInput,setBotaoInput] = useState(<button data-identifier="guess-button">Chutar</button>)

    function chutar(){
        setChute("");
        alert("Você ganhou!");
    }

    function fimJogo(){
        alert("Você perdeu");
    }

    function acertou (){
        setAtividade("inativa");

        console.log("Acertei");
    }

    function errou (){

        if (erro === 6){
            fimJogo();
        }else{
            let novoErro = erro + 1;
            setErro(novoErro);

            let novaImagem = imagens[novoErro];
            setForca(novaImagem);

            setAtividade("inativa");
        }
    }

    function comecarJogo(){
        setPalavra(palavras[Math.floor(Math.random() * (palavras.length + 1))]);

        setEscolherPalavra(<button data-identifier="choose-word">Escolher Palavra</button>);

        setAtividade("ativada");

        setLetras(alfabeto.map((l,index) => <li className={atividade} onClick={palavraArray.includes(l) ? acertou : errou} key={index} data-identifier="letter">{l}</li>));

        setInput(<input type="text" data-identifier="type-guess" value={chute} onChange={e => setChute(e.target.value)}/>);

        setBotaoInput(<button data-identifier="guess-button" onClick={palavra === chute ? chutar : fimJogo}>Chutar</button>);
    }

    function Superior(){
        return(
            <div className="superior">
                <img src={forca} alt="Forca" data-identifier="game-image"></img>
                <div className="sistemaPalavra">
                    {escolherPalavra}
                    <ul className="palavra" data-identifier="word">
                    {palavraArray.map((p,index) => <li key={index}><p className="inativo">{p}</p></li>)}
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
                <form>
                    {input}
                </form>
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

