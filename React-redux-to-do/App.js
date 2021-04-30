import React, { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { listeyeEkle, isaretle, temizle } from "./actions";

const App = (props) => {
  const [text, setText] = useState("");

  console.log(props.liste);
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          placeholer="listeye ekle"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText("");
            props.listeyeEkle(text);
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {props.liste.map((item) => (
          <div
            onClick={() => props.isaretle(item.id)}
            key={item.id}
            className={item.tamamlandi ? "yapildi" : ""}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={() => props.temizle()} className="temizle">
        Tamamlananları Temizle
      </button>
    </div>
  );
};
const MapStateToProps = (state) => {
  return {
    liste: state.liste
  };
};

export default connect(MapStateToProps, { listeyeEkle, isaretle, temizle })(
  App
);
