import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParamentro from './components/basicos/ComParamentro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Fetch from './components/basicos/Fetch'

import Card from './components/layout/Card'
import Megasena from './components/megasena/Gerador'


export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#12 - Fetch" color="#73503C">
                <Fetch></Fetch>
            </Card>

            <Card titulo="#11 - Megasena" color="#73503C">
                <Megasena qtdeNumero={8}></Megasena>
            </Card>

            <Card titulo="#10 - Contador" color="#293E6A">
                <Contador passo={10} valor={100}></Contador>
            </Card>

            <Card titulo="#09 - Input" color="#9C0F5F">
                <Input></Input>
            </Card>

            <Card titulo="#08 - Comunicação indireta" color="#000">
                <Super></Super>
            </Card>

            <Card titulo="#07 - Comunicação direta" color="#4298B5">
                <Pai sobrenome="Freitas"></Pai>
            </Card>

            <Card titulo="#06 - Condicional v2" color="#FA6900">
                <CondicionalComIf numero={10}></CondicionalComIf>
            </Card>

            <Card titulo="#05 - Condicional v1" color="#008BBA">
                <Condicional numero={11}></Condicional>
            </Card>

            <Card titulo="#04 - Repetição" color="#D96459">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="#03 - Componente Com Filhos" color="#E94C6F">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#02 - Componente Com Parametro" color="#FF85CB">
                <ComParamentro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#92B06A">
                <Primeiro />
            </Card>
        </div>
    </div>
);
