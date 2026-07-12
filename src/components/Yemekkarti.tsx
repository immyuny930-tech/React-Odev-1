import "./Yemekkarti.css"

interface KartProps {
    yemekAdi: string;
    pisirmeSuresi: number;
    zorluk: string;
    vejetaryan: boolean;
    malzemeler: string[];
}

function Kart(props: KartProps) {
    return(
        <div className="kart">
            <h1>{props.yemekAdi}</h1>
            <p>Pişirme/Hazırlama Süresi: {props.pisirmeSuresi} Saat</p>
            <p>Pişirme Zorluğu: {props.zorluk}</p>
            <p>Vejetaryan: {props.vejetaryan ? "Evet" : "Hayır"}</p>
            <h3>Malzemeler:</h3>
            <ul>
                {props.malzemeler.map((malzeme) => (
                    <li>{malzeme}</li>
                ))}
            </ul>
        </div>

    )
}

export default Kart;