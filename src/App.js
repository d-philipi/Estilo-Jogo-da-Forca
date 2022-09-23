import palavras from "./Palavras";
import React from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function App (){
    return(
        <>
            <div class="superior">
                <img src="./assets/forca0.png" alt="Forca"></img>
                <div class="sistemaPalavra">
                    <button>Escolher Palavra</button>
                    <ul class="palavra">
                    <li>A</li>
                    <li>B</li>
                    <li>A</li>
                    <li>C</li>
                    <li>A</li>
                    <li>T</li>
                    <li>E</li>
                    </ul>
                </div>
            </div>
            <ul class="letras">
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
                <li>G</li>
                <li>H</li>
                <li>I</li>
                <li>J</li>
                <li>K</li>
                <li>L</li>
                <li>M</li>
                <li>N</li>
                <li>O</li>
                <li>P</li>
                <li>Q</li>
                <li>R</li>
                <li>S</li>
                <li>T</li>
                <li>U</li>
                <li>V</li>
                <li>W</li>
                <li>X</li>
                <li>Y</li>
                <li>Z</li>
            </ul>
            <div class="chute">
                <span>Já sei a palavra!</span>
                <input type="text"></input>
                <button>Chutar</button>
            </div>
        </>
    )
}

