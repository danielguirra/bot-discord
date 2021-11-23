const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("coins")
    .setDescription("lista de moedas"),
  async execute(interaction) {
    interaction.reply({
      embeds: [
        getEmbed(
          `Lista de moedas`,
          `${interaction.user.tag}
        AED	Dirham dos Emirados Árabes Unidos
        AFN	Afeganistão Afegane
        ALL	Albânia Lek
        AMD	Armênia Dram
        AOA	Angola Kwanza
        ARS	Argentina Peso
        AUD	Dólar australiano
        AWG	Aruba Florim
        AZN	Azerbaijão Manat
        BBD	Barbados Dólar
        BDT	Bangladesh Taka
        BGN	Bulgária Lev
        BOB	Bolívia Bolíviano
        BRL	Brasil Real
        BSD	Bahamas Dólar
        BTN	Butão Ngultrum
        BZD	Belize Dólar
        CAD	Dólar do Canadá
        CDF	Congo/Kinshasa Franco
        CHF	Franco da Suíça
        CLP	Chile Peso
        CNY	Yuan Renminbi da China
        COP	Colômbia Peso
        CRC	Costa Rica Colón
        CUP	Cuba Peso
        CVE	Cabo Verde Escudo
        CZK	República Tcheca Coroa
        DKK	Dinamarca Coroa
        DOP	República Dominicana Peso
        DZD	Argélia Dinar
        EGP	Egito Libra
        ETB	Etiópia Birr
        EUR	Países-membros do Euro
        FJD	Fiji Dólar
        FKP	Ilhas Falkland (Malvinas) Libra
        GBP	Libra do Reino Unido
        GEL	Geórgia Lari
        GHS	Gana Cedi
        GNF	Guiné Franco
        GTQ	Guatemala Quetzal
        GYD	Guiana Dólar
        HKD	Hong Kong Dólar
        HNL	Honduras Lempira
        HRK	Croácia Kuna
        HTG	Haiti Gourde
        HUF	Hungria Forint
        IDR	Indonésia Rúpia
        ILS	Israel Shekel
        IMP	Ilha de Man Libra
        INR	Rúpia da Índia
        IQD	Iraque Dinar
        IRR	Irã Rial
        ISK	Islândia Coroa
        JMD	Jamaica Dólar
        JOD	Jordânia Dinar
        JPY	Iene do Japão
        KMF	Comoros Franco
        KPW	Coreia (Norte) Won
        KRW	Coreia (Sul) Won
        KWD	Kuwait Dinar
        KYD	Ilhas Caiman Dólar
        KZT	Cazaquistão Tenge
        LAK	Laos Kip
        LBP	Líbano Libra
        LKR	Sri Lanka Rúpia
        LRD	Libéria Dólar
        LYD	Líbia Dinar
        MAD	Marrocos Dirham
        MDL	Moldávia Leu
        MGA	Madagascar Ariary
        MKD	Macedônia Dinar
        MMK	Mianmar (Birmânia) Kyat
        MNT	Mongólia Tughrik
        MOP	Macau Pataca
        MRU	Mauritânia Ouguiya
        MUR	Ilhas Maurício Rúpia
        MVR	Maldivas (Ilhas Maldivas) Rufiyaa
        MWK	Malaui Kwacha
        MXN	México Peso
        MYR	Ringgit da Malásia
        MZN	Moçambique Metical
        NAD	Namíbia Dólar
        NGN	Nigéria Naira
        NIO	Nicarágua Córdoba
        NOK	Noruega Coroa
        NPR	Nepal Rúpia
        NZD	Dólar neozelandês
        OMR	Omã Rial
        PAB	Panamá Balboa
        PEN	Peru Sol
        PHP	Filipinas Peso
        PKR	Paquistão Rúpia
        PLN	Polônia Zloty
        PYG	Paraguai Guarani
        QAR	Qatar Rial
        RON	Romênia Leu
        RSD	Sérvia Dinar
        RUB	Rússia Rublo
        RWF	Ruanda Franco
        SAR	Rial da Arábia Saudita
        SDG	Sudão Libra
        SEK	Suécia Coroa
        SGD	Cingapura Dólar
        SHP	Santa Helena Libra
        SLL	Serra Leoa Leone
        SOS	Somália Xelim
        SRD	Suriname Dólar
        STN	São Tomé e Príncipe Dobra
        SVC	El Salvador Colón
        SYP	Síria Libra
        SZL	Suazilândia Lilangeni
        THB	Baht da Tailândia
        TJS	Tajiquistão Somoni
        TMT	Turcomenistão Manat
        TND	Tunísia Dinar
        TOP	Tonga Pa'anga
        TRY	Turquia Lira
        TTD	Trinidad e Tobago Dólar
        TVD	Tuvalu Dólar
        TWD	Taiwan Novo dólar
        TZS	Tanzânia Xelim
        UAH	Ucrânia Hryvna
        UGX	Uganda Xelim
        USD	Dólar dos Estados Unidos
        UYU	Uruguai Peso
        UZS	Uzbequistão Som
        VEF	Venezuela Bolívar
        VND	Vietnã Dong
        VUV	Vanuatu Vatu
        WST	Samoa Tala
        XCD	Caribe Leste Dólar
        XDR	Fundo Monetário Internacional (FMI) Direitos de saque especiais
        XOF	Communauté Financière Africaine (BCEAO) Franco
        XPF	Comptoirs Français du Pacifique (CFP) Franco
        YER	Iêmen Rial
        ZAR	Rand da África do Sul
        ZWD	Zimbábue Dólar

        `
        ),
      ],
    });
  },
};
