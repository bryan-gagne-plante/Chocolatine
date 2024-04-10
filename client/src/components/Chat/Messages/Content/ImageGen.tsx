import { useState } from 'react';
import ProgressCircle from './ProgressCircle';
import ProgressText from './ProgressText';
import { useProgress } from '~/hooks';

export default function ImageGen({
  initialProgress = 0.1,
  args = '',
}: {
  initialProgress: number;
  args: string;
}) {
  const progress = useProgress(initialProgress);
  const radius = 56.08695652173913;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - progress * circumference;
  const [showDetails, setShowDetails] = useState(false);

  // const [translate, setTranslate] = useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTranslate((prevTranslate) => (prevTranslate + 1) % 360);
  //   }, 20);
  //   return () => clearInterval(timer);
  // }, []);
  // if (progress >= 1) {
  //   return null;
  // }

  return (
    <div className="my-2.5 flex items-center gap-2.5">
      <div className="relative h-5 w-5 shrink-0">
        <div
          className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full bg-transparent text-white"
          style={{ opacity: 1, transform: 'none' }}
          data-projection-id="106"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 20 20"
              width="20"
              height="20"
              style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)' }}
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="__lottie_element_24">
                  <rect width="20" height="20" x="0" y="0" />
                </clipPath>
              </defs>
              <g clipPath="url(#__lottie_element_24)">
                <g
                  style={{ display: 'block' }}
                  transform="matrix(1,0,0,1,9.999999046325684,10.170669555664062)"
                  opacity="1"
                >
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,-2.0937423706054688,-4.2560648918151855)"
                  >
                    <path
                      fill="rgb(177,98,253)"
                      fillOpacity="1"
                      d=" M4.7193779945373535,0.4155600070953369 C4.442327976226807,-0.1385200023651123 3.651618003845215,-0.1385200023651123 3.374567985534668,0.4155600070953369 C2.276491403579712,2.6116867065429688 1.1784147024154663,4.8078131675720215 0.08033806085586548,7.003940105438232 C-0.16959194839000702,7.503779888153076 0.19388805329799652,8.091899871826172 0.7527380585670471,8.091899871826172 C2.948878049850464,8.091899871826172 5.145018100738525,8.091899871826172 7.341157913208008,8.091899871826172 C7.900058269500732,8.091899871826172 8.263558387756348,7.503779888153076 8.01365852355957,7.003940105438232 C6.91556453704834,4.8078131675720215 5.817471504211426,2.6116867065429688 4.7193779945373535,0.4155600070953369 C4.7193779945373535,0.4155600070953369 4.7193779945373535,0.4155600070953369 4.7193779945373535,0.4155600070953369 C4.7193779945373535,0.4155600070953369 4.7193779945373535,0.4155600070953369 4.7193779945373535,0.4155600070953369"
                    />
                  </g>
                </g>
                <g
                  style={{ display: 'block' }}
                  transform="matrix(1,0,0,1,9.999999046325684,10.170669555664062)"
                  // transform={`matrix(1,0,0,1,${translate},10.170669555664062)`}
                  opacity="1"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,-6.000233173370361,-1.244344711303711)">
                    <path
                      fill="rgb(177,98,253)"
                      fillOpacity="1"
                      d=" M3.2158396244049072,0.4155600070953369 C2.9387896060943604,-0.1385200023651123 2.1480696201324463,-0.1385200023651123 1.8710296154022217,0.4155600070953369 C1.2741318941116333,1.609339952468872 0.6772342324256897,2.8031198978424072 0.08033652603626251,3.9969000816345215 C-0.16959036886692047,4.496739864349365 0.19388863444328308,5.084849834442139 0.7527406215667725,5.084849834442139 C1.9465336799621582,5.084849834442139 3.140326738357544,5.084849834442139 4.33411979675293,5.084849834442139 C4.892979621887207,5.084849834442139 5.2564496994018555,4.496739864349365 5.006529808044434,3.9969000816345215 C4.409633159637451,2.8031198978424072 3.8127362728118896,1.609339952468872 3.2158396244049072,0.4155600070953369 C3.2158396244049072,0.4155600070953369 3.2158396244049072,0.4155600070953369 3.2158396244049072,0.4155600070953369 C3.2158396244049072,0.4155600070953369 3.2158396244049072,0.4155600070953369 3.2158396244049072,0.4155600070953369"
                    />
                  </g>
                </g>
                <g
                  style={{ display: 'block' }}
                  transform="matrix(1,0,0,1,9.999999046325684,10.170669555664062)"
                  opacity="1"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,-2.9004335403442383,3.5173749923706055)">
                    <path
                      fill="rgb(177,98,253)"
                      fillOpacity="1"
                      d=" M0,0 C1.396156668663025,0 2.79231333732605,0 4.188469886779785,0 C4.188469886779785,0.1073966696858406 4.188469886779785,0.2147933393716812 4.188469886779785,0.32218998670578003 C2.79231333732605,0.32218998670578003 1.396156668663025,0.32218998670578003 0,0.32218998670578003 C0,0.2147933393716812 0,0.1073966696858406 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0"
                    />
                  </g>
                </g>
                <g style={{ display: 'block' }} transform="matrix(-1,0,0,-1,10,10)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="rgb(255,214,64)"
                      fillOpacity="0"
                      d=" M9,-9 C9,-9 9,9 9,9 C9,9 -9,9 -9,9 C-9,9 -9,-9 -9,-9 C-9,-9 9,-9 9,-9z"
                    />
                  </g>
                </g>
                <g style={{ display: 'block' }} transform="matrix(-1,0,0,-1,10,10)" opacity="1">
                  <g opacity="0" transform="matrix(1,0,0,1,-2.1999998092651367,-3.507655143737793)">
                    <path
                      fill="rgb(177,98,253)"
                      fillOpacity="1"
                      d=" M0,-1.5035200119018555 C0.8298037648200989,-1.5035200119018555 1.5035400390625,-0.8297926783561707 1.5035400390625,0 C1.5035400390625,0.8297926783561707 0.8298037648200989,1.5035200119018555 0,1.5035200119018555 C-0.8298037648200989,1.5035200119018555 -1.5035400390625,0.8297926783561707 -1.5035400390625,0 C-1.5035400390625,-0.8297926783561707 -0.8298037648200989,-1.5035200119018555 0,-1.5035200119018555z"
                    />
                  </g>
                </g>
                {/* Moon SVG */}
                <g style={{ display: 'block' }} transform="matrix(-1,0,0,-1,10,10)" opacity="1">
                  <g opacity="1" transform="matrix(-1,0,0,-1,3.75,5.5)">
                    <path
                      fill="rgb(177,98,253)"
                      fillOpacity="1"
                      d=" M2.660290002822876,2.2502501010894775 C2.7567598819732666,2.2502501010894775 2.850860118865967,2.241950035095215 2.9425699710845947,2.225330114364624 C3.034290075302124,2.208709955215454 3.1081299781799316,2.1867599487304688 3.164109945297241,2.1594600677490234 C3.239150047302246,2.120300054550171 3.305850028991699,2.100709915161133 3.364219903945923,2.100709915161133 C3.405900001525879,2.100709915161133 3.438659906387329,2.113770008087158 3.462480068206787,2.1398799419403076 C3.487489938735962,2.165990114212036 3.5,2.2009999752044678 3.5,2.2449100017547607 C3.5,2.2698400020599365 3.4958300590515137,2.2983200550079346 3.487489938735962,2.3303699493408203 C3.4803500175476074,2.362410068511963 3.468440055847168,2.3968300819396973 3.4517600536346436,2.433619976043701 C3.3803000450134277,2.5950300693511963 3.287990093231201,2.7410099506378174 3.1748299598693848,2.871570110321045 C3.0628700256347656,3.002120018005371 2.9348299503326416,3.1142799854278564 2.790709972381592,3.2080399990081787 C2.646589994430542,3.3029799461364746 2.4905600547790527,3.375380039215088 2.3226099014282227,3.425230026245117 C2.15585994720459,3.4750800132751465 1.9825600385665894,3.5 1.8027100563049316,3.5 C1.5430500507354736,3.5 1.3036400079727173,3.4554901123046875 1.0844800472259521,3.3664801120758057 C0.8653200268745422,3.2786500453948975 0.6741499900817871,3.1540400981903076 0.5109699964523315,2.9926199913024902 C0.34898999333381653,2.831209897994995 0.22333000600337982,2.641319990158081 0.1340000033378601,2.4229400157928467 C0.04467000067234039,2.2045600414276123 0,1.9660099744796753 0,1.7072700262069702 C0,1.4639699459075928 0.04645000025629997,1.2325400114059448 0.1393599957227707,1.012969970703125 C0.23226000368595123,0.7922199964523315 0.3626900017261505,0.5975800156593323 0.5306299924850464,0.4290440082550049 C0.6997600197792053,0.2593249976634979 0.8968899846076965,0.12877200543880463 1.121999979019165,0.03738600015640259 C1.1541600227355957,0.024329999461770058 1.1833399534225464,0.01483600027859211 1.2095500230789185,0.008901000022888184 C1.2369400262832642,0.0029670000076293945 1.2631399631500244,2.220446049250313e-16 1.288159966468811,2.220446049250313e-16 C1.335800051689148,2.220446049250313e-16 1.3733199834823608,0.014241999946534634 1.4007099866867065,0.042725998908281326 C1.4292999505996704,0.07121100276708603 1.4435900449752808,0.10681600123643875 1.4435900449752808,0.14954200387001038 C1.4435900449752808,0.1780260056257248 1.438230037689209,0.2076980024576187 1.4275100231170654,0.23855499923229218 C1.41798996925354,0.2682270109653473 1.404289960861206,0.2996779978275299 1.3864200115203857,0.3329089879989624 C1.3625999689102173,0.3768230080604553 1.3423500061035156,0.4302310049533844 1.3256800174713135,0.493133008480072 C1.309000015258789,0.5548499822616577 1.296489953994751,0.6225000023841858 1.288159966468811,0.6960800290107727 C1.2798199653625488,0.7684800028800964 1.2756500244140625,0.8414700031280518 1.2756500244140625,0.9150599837303162 C1.2756500244140625,1.1215699911117554 1.3072099685668945,1.3073099851608276 1.3703399896621704,1.4722800254821777 C1.4346599578857422,1.6372499465942383 1.5269700288772583,1.7778899669647217 1.6472699642181396,1.8941999673843384 C1.7675700187683105,2.0093300342559814 1.9128799438476562,2.097749948501587 2.083209991455078,2.1594600677490234 C2.2547199726104736,2.2199900150299072 2.44707989692688,2.2502501010894775 2.660290002822876,2.2502501010894775 C2.660290002822876,2.2502501010894775 2.660290002822876,2.2502501010894775 2.660290002822876,2.2502501010894775 C2.660290002822876,2.2502501010894775 2.660290002822876,2.2502501010894775 2.660290002822876,2.2502501010894775"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <ProgressCircle radius={radius} circumference={circumference} offset={offset} />
        </div>
      </div>
      <ProgressText
        progress={progress}
        onClick={() => setShowDetails((prev) => !prev)}
        inProgressText="Creating Image"
        finishedText="Finished."
        hasInput={false}
      />
    </div>
  );
}
