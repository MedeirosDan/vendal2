export default function Home() {

  const items = [
    {
      "Item": "Adena",
      "Quantidade": 500,
      "ValorAdenaUnidade": 1.7,
      "ValorTotalAdena": 850,
      "ValorTotalDinheiro": "R$ 850,00",
      "Status": "Disponível"
    },
    {
      "Item": "Cutter limited +18",
      "Quantidade": 1,
      "ValorAdenaUnidade": 600,
      "ValorTotalAdena": 600,
      "ValorTotalDinheiro": "R$ 1.020,00",
      "Status": "Vendido"
    },
    {
      "Item": "Cutter limited +23",
      "Quantidade": 1,
      "ValorAdenaUnidade": 950,
      "ValorTotalAdena": 950,
      "ValorTotalDinheiro": "R$ 1.615,00",
      "Status": "Disponível"
    },
    {
      "Item": "Set Bloody Light +10 FE",
      "Quantidade": 1,
      "ValorAdenaUnidade": 420,
      "ValorTotalAdena": 420,
      "ValorTotalDinheiro": "R$ 714,00",
      "Status": "Disponível"
    },
    {
      "Item": "Bloody Sigil",
      "Quantidade": 1,
      "ValorAdenaUnidade": 100,
      "ValorTotalAdena": 100,
      "ValorTotalDinheiro": "R$ 170,00",
      "Status": "Disponível"
    },
    {
      "Item": "Circlet +10",
      "Quantidade": 1,
      "ValorAdenaUnidade": 700,
      "ValorTotalAdena": 700,
      "ValorTotalDinheiro": "R$ 1.190,00",
      "Status": "Disponível"
    },
    {
      "Item": "Fallen Earring Reduce Lv 3 +6",
      "Quantidade": 1,
      "ValorAdenaUnidade": 250,
      "ValorTotalAdena": 250,
      "ValorTotalDinheiro": "R$ 425,00",
      "Status": "Disponível"
    },
    {
      "Item": "Fallen Angel's Ring CHA Lv 1",
      "Quantidade": 1,
      "ValorAdenaUnidade": 100,
      "ValorTotalAdena": 100,
      "ValorTotalDinheiro": "R$ 170,00",
      "Status": "Disponível"
    },
    {
      "Item": "Angel's Earring Save Lv 1 +9",
      "Quantidade": 1,
      "ValorAdenaUnidade": 150,
      "ValorTotalAdena": 150,
      "ValorTotalDinheiro": "R$ 255,00",
      "Status": "Disponível"
    },
    {
      "Item": "Dragon ring +3",
      "Quantidade": 1,
      "ValorAdenaUnidade": 700,
      "ValorTotalAdena": 700,
      "ValorTotalDinheiro": "R$ 1.190,00",
      "Status": "Vendido"
    },
    {
      "Item": "Dragon Necklac+3",
      "Quantidade": 1,
      "ValorAdenaUnidade": 700,
      "ValorTotalAdena": 700,
      "ValorTotalDinheiro": "R$ 1.190,00",
      "Status": "Vendido"
    },
    {
      "Item": "Capa +10 P. Skill Critical Rate 7.5",
      "Quantidade": 1,
      "ValorAdenaUnidade": 450,
      "ValorTotalAdena": 450,
      "ValorTotalDinheiro": "R$ 765,00",
      "Status": "Disponível"
    },
    {
      "Item": "Tersi +7",
      "Quantidade": 5,
      "ValorAdenaUnidade": 64,
      "ValorTotalAdena": 320,
      "ValorTotalDinheiro": "R$ 544,00",
      "Status": "Disponível"
    },
    {
      "Item": "G Ruby Lv 3",
      "Quantidade": 1,
      "ValorAdenaUnidade": 190,
      "ValorTotalAdena": 190,
      "ValorTotalDinheiro": "R$ 323,00",
      "Status": "Disponível"
    },
    {
      "Item": "G Aquamarine Lv 2",
      "Quantidade": 1,
      "ValorAdenaUnidade": 190,
      "ValorTotalAdena": 190,
      "ValorTotalDinheiro": "R$ 323,00",
      "Status": "Disponível"
    },
    {
      "Item": "Top-grade Red Cat's Eye Lv 1",
      "Quantidade": 1,
      "ValorAdenaUnidade": 550,
      "ValorTotalAdena": 550,
      "ValorTotalDinheiro": "R$ 935,00",
      "Status": "Disponível"
    },
    {
      "Item": "Greater Opal Lv 1",
      "Quantidade": 1,
      "ValorAdenaUnidade": 150,
      "ValorTotalAdena": 150,
      "ValorTotalDinheiro": "R$ 255,00",
      "Status": "Disponível"
    },
    {
      "Item": "Greater Emerald Lv 1",
      "Quantidade": 1,
      "ValorAdenaUnidade": 160,
      "ValorTotalAdena": 160,
      "ValorTotalDinheiro": "R$ 272,00",
      "Status": "Disponível"
    },
    {
      "Item": "Greater Diamond Lv 2",
      "Quantidade": 1,
      "ValorAdenaUnidade": 190,
      "ValorTotalAdena": 190,
      "ValorTotalDinheiro": "R$ 323,00",
      "Status": "Disponível"
    },
    {
      "Item": "Greater Garnet Lv 1",
      "Quantidade": 1,
      "ValorAdenaUnidade": 200,
      "ValorTotalAdena": 200,
      "ValorTotalDinheiro": "R$ 340,00",
      "Status": "Disponível"
    },
    {
      "Item": "Greater Vital",
      "Quantidade": 1,
      "ValorAdenaUnidade": 200,
      "ValorTotalAdena": 200,
      "ValorTotalDinheiro": "R$ 340,00",
      "Status": "Disponível"
    },
    {
      "Item": "G Cancer Agathion",
      "Quantidade": 1,
      "ValorAdenaUnidade": 80,
      "ValorTotalAdena": 80,
      "ValorTotalDinheiro": "R$ 136,00",
      "Status": "Disponível"
    },
    {
      "Item": "G Gemini Agathion",
      "Quantidade": 1,
      "ValorAdenaUnidade": 80,
      "ValorTotalAdena": 80,
      "ValorTotalDinheiro": "R$ 136,00",
      "Status": "Disponível"
    },
    {
      "Item": "G Aries Agathion",
      "Quantidade": 1,
      "ValorAdenaUnidade": 80,
      "ValorTotalAdena": 80,
      "ValorTotalDinheiro": "R$ 136,00",
      "Status": "Disponível"
    },
    {
      "Item": "G Leo Agathion",
      "Quantidade": 1,
      "ValorAdenaUnidade": 80,
      "ValorTotalAdena": 80,
      "ValorTotalDinheiro": "R$ 136,00",
      "Status": "Disponível"
    },
    {
      "Item": "G Taurus Agathion",
      "Quantidade": 1,
      "ValorAdenaUnidade": 80,
      "ValorTotalAdena": 80,
      "ValorTotalDinheiro": "R$ 136,00",
      "Status": "Disponível"
    },
    {
      "Item": "Top-grade La Vie En Rose's Brooch",
      "Quantidade": 1,
      "ValorAdenaUnidade": 150,
      "ValorTotalAdena": 150,
      "ValorTotalDinheiro": "R$ 255,00",
      "Status": "Disponível"
    },
    {
      "Item": "Top-grade Kaliel's Bracelet",
      "Quantidade": 1,
      "ValorAdenaUnidade": 77,
      "ValorTotalAdena": 77,
      "ValorTotalDinheiro": "R$ 130,90",
      "Status": "Disponível"
    },
    {
      "Item": "Top-grade Artifact Book Lv 3",
      "Quantidade": 1,
      "ValorAdenaUnidade": 100,
      "ValorTotalAdena": 100,
      "ValorTotalDinheiro": "R$ 170,00",
      "Status": "Disponível"
    },
    {
      "Item": "Super Advanced Seed Bracilet Lv 4 +5",
      "Quantidade": 1,
      "ValorAdenaUnidade": 300,
      "ValorTotalAdena": 300,
      "ValorTotalDinheiro": "R$ 510,00",
      "Status": "Disponível"
    },
    {
      "Item": "Dragon Rind Leather Shirt +5",
      "Quantidade": 1,
      "ValorAdenaUnidade": 139,
      "ValorTotalAdena": 139,
      "ValorTotalDinheiro": "R$ 236,30",
      "Status": "Disponível"
    },
    {
      "Item": "Legendary P. Skill Critical Damage Dye Lv 5",
      "Quantidade": 1,
      "ValorAdenaUnidade": 65,
      "ValorTotalAdena": 65,
      "ValorTotalDinheiro": "R$ 110,50",
      "Status": "Disponível"
    },
    {
      "Item": "Legendary P. Atk - Lv 5",
      "Quantidade": 1,
      "ValorAdenaUnidade": 65,
      "ValorTotalAdena": 65,
      "ValorTotalDinheiro": "R$ 110,50",
      "Status": "Disponível"
    },
    {
      "Item": "Legendary P. Skill Power Dye - Lv 5",
      "Quantidade": 1,
      "ValorAdenaUnidade": 65,
      "ValorTotalAdena": 65,
      "ValorTotalDinheiro": "R$ 110,50",
      "Status": "Disponível"
    },
    {
      "Item": "Forgotten Lord's Dye - Lv 3",
      "Quantidade": 1,
      "ValorAdenaUnidade": 30,
      "ValorTotalAdena": 30,
      "ValorTotalDinheiro": "R$ 51,00",
      "Status": "Disponível"
    },
    {
      "Item": "Vernir's Talisman Lv. 18",
      "Quantidade": 1,
      "ValorAdenaUnidade": 92,
      "ValorTotalAdena": 92,
      "ValorTotalDinheiro": "R$ 156,40",
      "Status": "Disponível"
    },
    {
      "Item": "Sayha's Talisman Lv 9",
      "Quantidade": 1,
      "ValorAdenaUnidade": 235,
      "ValorTotalAdena": 235,
      "ValorTotalDinheiro": "R$ 399,50",
      "Status": "Disponível"
    },
    {
      "Item": "Talisman - Heaven",
      "Quantidade": 1,
      "ValorAdenaUnidade": 200,
      "ValorTotalAdena": 200,
      "ValorTotalDinheiro": "R$ 340,00",
      "Status": "Disponível"
    },
    {
      "Item": "Talisman - Seven Signs",
      "Quantidade": 1,
      "ValorAdenaUnidade": 15,
      "ValorTotalAdena": 15,
      "ValorTotalDinheiro": "R$ 25,50",
      "Status": "Disponível"
    }
  ]

  const valueAdena = 1.7

  return (
    <div className="container">
      <div className="title">
        <h1>Servidor - Naia</h1>
        <span>No pix 5% de desconto</span>
      </div>
      <div className="titleItems">
        <div className="flex-2">Item</div>
        <div className="titleItem center">Quantidade</div>
        <div className="titleItem center">Valor unidade Adena</div>
        <div className="titleItem center">Valor Total Adena</div>
        <div className="titleItem center">Valor R$</div>
        <div className="titleItem center">Status</div>
      </div>
      {items.map((item, index) => (
        <div key={index} className="items">
          <div className="item">{item.Item}</div>
          <div className="item center">{item.Quantidade}</div>
          <div className="item center">{item.ValorAdenaUnidade}</div>
          <div className="item center">{item.Quantidade * item.ValorAdenaUnidade}</div>
          <div className="item center">
            {(Math.ceil(item.Quantidade * item.ValorAdenaUnidade * valueAdena))
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </div>
          <div className={`item center ${item.Status == 'Vendido' ? 'vendido' : 'disponível'}`}>
            {item.Status}
          </div>

        </div>
      ))}
    </div>

  );
}
