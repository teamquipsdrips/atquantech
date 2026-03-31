import imgJosefIvanJimenea8AOo0GnglfQUnsplash1 from './assets/7d853afa6e89844424f17669f68815596e84b969.png';
import imgGBnkhJ17BmtTHqpLjPkAeWdN8UPng from './assets/f8d08de14420f117134bfe560e4a37cb117d12cc.png';
import imgZfmF1IFydx2IAwx2TDdmHahKsKyPng1 from './assets/1f8d7f1e574bcefa7f223927ee8b9728087b1e7d.png';
import img7IfoWsHvy0Rjfr1N6Chu0JDp1JAPng1 from './assets/9089c64e68219aa493e05200fbbc21336a24eb38.png';
import imgNSjFnEeB2R1Ym5Orpw7RRVinGqPng1 from './assets/9ccc3a5303ef208f826bbcb1dec4e3b7dde52dcc.png';
import imgDownload20251230T1014555211 from './assets/26d850bdc0f8039a500111306da755dd1a0e7810.png';
import imgAnVz4ZPvOInlibZlyjp6CvBxSwPng from './assets/7d5bcf05e1fe76ee1a649efa7fbd247a734da4aa.png';
import imgKabaenIMekka1 from './assets/78cb2b44e54ecda979c84ee5f785d94e9ee75f39.png';
import imgNaveedAnjumR0974PkXadEUnsplash1 from './assets/89dd60eb04dbae11b30771a7f094d3557825a4d9.png';
import imgFrame2147227603 from './assets/dd86af61bdf18df0d302ca4c768ec91b94dc5fd7.png';
import imgGroup1707478469 from './assets/ce9c4fa034f44b3422ee3899159d4e5a0cf10b74.svg';
import imgAtqantech from './assets/0930f90a3403227563ba6b632f4bdda2cdecf6b8.svg';
import imgZfmF1IFydx2IAwx2TDdmHahKsKyPng from './assets/dbeb4c5defe7b87b6bcc33387801f8829807bde3.svg';
import img7IfoWsHvy0Rjfr1N6Chu0JDp1JAPng from './assets/19f99d8fd8a3266233e5d1d934db91dda23d81d4.svg';
import imgNSjFnEeB2R1Ym5Orpw7RRVinGqPng from './assets/7005577b162fd6c1c5b6ba2f52aaf0decdd0325b.svg';
import img6904Ca7A4Abbe56Dfff89559ServiceIcon01Svg from './assets/072b0dc4fe32ce18b2766c08967dc528d172fec4.svg';
import img6904Ca7A4Abbe56Dfff89556ServiceIcon02Svg from './assets/e943aaa975e5660da5b00e99d0dd7bba3d7bbc76.svg';
import img6904Ca7A4Abbe56Dfff89558ServiceIcon03Svg from './assets/d402ab2dff4d7cec280ae5aaf0da3b7d6e51b237.svg';
import imgWeuiArrowOutlined from './assets/07137d2c115d684e6cbc364f8f81a0ab1a206e3b.svg';
import imgEllipse2092 from './assets/7f0dc38f996402f0bd4ff53b44875a9915676180.svg';
import imgVector from './assets/059b79884aa4b02625438c63c70823eeeb0dc4bc.svg';
import img1AnimateSvg from './assets/2cd84919b273c196f3a01ddc33a3fe85b501dc6f.svg';
import imgVariant2Svg from './assets/1207ca4f0ad4f839568d079771fb2f8e5564a8da.svg';
import imgLogosGoogle from './assets/2356c351383fe843509d78247527e2396e7cdd09.svg';
import imgLogosZapier from './assets/3450670026259684921f169f8bf551362fbf4497.svg';
import imgLogosSupabase from './assets/d47a0a7401ce6ace5e9b17e3eb05aebf106a000e.svg';
import imgLogosSnowflake from './assets/a2542d0170b45129250dcc8fe5fe2ab465e3c449.svg';
import imgLogosDocker from './assets/a28adc4703ffeab05efbce3bc9277ddb05e641ba.svg';
import imgLogosOpenai from './assets/254881d1dcb1b5382626e35be2187c051f1ceeca.svg';
import imgGroup from './assets/0e34cac8d502379fec5a38ec1f400d3f97e9d136.svg';
import imgGroup1 from './assets/49f3546f329619d4ff67a91572085233e45a34c7.svg';
import imgFrame from './assets/5a855a2924e97ec201e385f65b01befef67878b8.svg';
import imgGroup2 from './assets/e27c8b393caa68410ca57e7e2098a26275e27ba5.svg';
import imgGroup3 from './assets/857d9ac770869df60ec56a76c7cfcfd7f7714fc4.svg';

import { useEffect, useState } from 'react';


const industriesData = [
  {
    index: "01",
    id: "01",
    title: "Pilgrimage & Religious Services",
    subtitle: "Systems that support planning, coordination, logistics, and service delivery, designed for reliability during peak seasons.",
    image1: imgAnVz4ZPvOInlibZlyjp6CvBxSwPng,
    image2: imgKabaenIMekka1
  },
  {
    index: "02",
    id: "02",
    title: "Tourism & Hospitality",
    subtitle: "Mock text for Tourism & Hospitality. Systems built to handle large scale tour bookings, hospitality management and service delivery.",
    image1: imgAnVz4ZPvOInlibZlyjp6CvBxSwPng,
    image2: imgKabaenIMekka1
  },
  {
    index: "03",
    id: "03",
    title: "Finance & Enterprise Operations",
    subtitle: "Mock text for Finance. High-reliability enterprise platforms that ensure seamless operations and robust security for financial processes.",
    image1: imgAnVz4ZPvOInlibZlyjp6CvBxSwPng,
    image2: imgKabaenIMekka1
  },
  {
    index: "04",
    id: "04",
    title: "Government & Large Organizations",
    subtitle: "Mock text for Government. Scalable systems designed to handle nationwide operations, data securely and provide high availability.",
    image1: imgAnVz4ZPvOInlibZlyjp6CvBxSwPng,
    image2: imgKabaenIMekka1
  },
  {
    index: "05",
    id: "05",
    title: "Transport & Mobility",
    subtitle: "Mock text for Transport. Advanced logistics and mobility solutions to keep operations moving efficiently and on schedule.",
    image1: imgAnVz4ZPvOInlibZlyjp6CvBxSwPng,
    image2: imgKabaenIMekka1
  }
];

export default function English() {
  const [scale, setScale] = useState(1);
  const [activeIndustry, setActiveIndustry] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(window.innerWidth, document.documentElement.clientWidth);
      setScale(width / 1440);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ width: '100%', overflowX: 'hidden', display: 'flex', justifyContent: 'center', backgroundColor: '#fafafa' }}>
      <div style={{ zoom: scale, width: '1440px', flexShrink: 0, overflow: 'hidden' }}>
        <div className="content-stretch flex flex-col items-start relative size-full" data-name="English" data-node-id="1:2">
          <div className="bg-white h-[786px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 328" data-node-id="1:3">
        <div className="absolute h-[878px] left-0 top-[-92px] w-[1440px]" data-name="josef-ivan-jimenea-8aOO0GnglfQ-unsplash 1" data-node-id="1:4">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[109.34%] left-0 max-w-none top-0 w-full" src={imgJosefIvanJimenea8AOo0GnglfQUnsplash1} />
            </div>
            <div className="absolute bg-gradient-to-b from-[10%] from-[rgba(7,77,49,0)] inset-0 to-[#074d31]" />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex gap-[18px] items-center left-[calc(50%-0.45px)] top-[44px]" data-node-id="1:5">
          <div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center relative rounded-[16px] shadow-[0.237px_0.711px_1.05px_0px_rgba(0,0,0,0.03),0.646px_1.937px_2.859px_0px_rgba(0,0,0,0.04),1.418px_4.253px_6.277px_0px_rgba(0,0,0,0.05),3.147px_9.441px_13.933px_0px_rgba(0,0,0,0.07),8px_24px_35.417px_0px_rgba(0,0,0,0.12)] shrink-0 w-[163px]" data-node-id="1:6">
            <div className="content-stretch flex gap-[5.804px] items-center relative shrink-0" data-node-id="1:7">
              <div className="h-[27.23px] relative shrink-0 w-[32.5px]" data-node-id="1:8">
                <img alt="" className="absolute block max-w-none size-full" src={imgGroup1707478469} />
              </div>
              <div className="h-[11.088px] relative shrink-0 w-[86.402px]" data-name="ATQANTECH" data-node-id="1:16">
                <img alt="" className="absolute block max-w-none size-full" src={imgAtqantech} />
              </div>
              <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[121.89px] text-[#d2ad5c] text-[6.46px] top-[20.63px] whitespace-nowrap" data-node-id="1:26">
                AI
              </p>
            </div>
          </div>
          <div className="bg-white h-[56px] overflow-clip relative rounded-[16px] shadow-[0.237px_0.711px_1.05px_-0.2px_rgba(0,0,0,0.03),0.646px_1.937px_2.859px_-0.4px_rgba(0,0,0,0.04),1.418px_4.253px_6.277px_-0.6px_rgba(0,0,0,0.05),3.147px_9.441px_13.933px_-0.8px_rgba(0,0,0,0.07),8px_24px_35.417px_-1px_rgba(0,0,0,0.12)] shrink-0 w-[516.1px]" data-name="Link wrapper" data-node-id="1:27">
            <div className="-translate-y-1/2 absolute font-['Manrope:Medium',sans-serif] font-medium h-[40px] leading-[0] left-[8px] text-[15px] text-black top-1/2 w-[325.19px]" data-name="Nav list" data-node-id="1:28">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[19px] justify-center left-[44.29px] text-center top-[20.5px] w-[64.589px] cursor-pointer hover:text-[#cfa857] transition-colors" data-node-id="1:29">
                <p className="leading-[18px]">Home</p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[130.66px] text-center top-[20px] whitespace-nowrap cursor-pointer hover:text-[#cfa857] transition-colors" data-node-id="1:30">
                <p className="leading-[18px]">Services</p>
              </div>
              <div className="-translate-y-1/2 absolute flex flex-col h-[19px] justify-center left-[188.13px] top-[20.5px] w-[43.318px] cursor-pointer hover:text-[#cfa857] transition-colors" data-node-id="1:31">
                <p className="leading-[18px]">About</p>
              </div>
              <div className="-translate-y-1/2 absolute flex flex-col h-[19px] justify-center left-[255.07px] top-[20.5px] w-[58.533px] cursor-pointer hover:text-[#cfa857] transition-colors" data-node-id="1:32">
                <p className="leading-[18px]">Contact</p>
              </div>
            </div>
            <div className="absolute bg-gradient-to-b bottom-[8.5px] cursor-pointer from-[#f3e295] left-[368px] overflow-clip rounded-[12px] to-[#cfa857] top-[7.5px] w-[137px]" data-name="Link - Inverse Main" data-node-id="1:33">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[20px] text-[#3a3839] text-[16px] top-[20.39px] whitespace-nowrap" data-node-id="1:34">
                <p className="leading-[19.2px]">Work with us</p>
              </div>
            </div>
            <div className="absolute border border-[rgba(235,212,135,0)] border-solid inset-0 rounded-[16px] pointer-events-none" data-name="Border" data-node-id="1:35" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[23px] items-center left-[150px] top-[241px] w-[1140px]" data-node-id="1:36">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="1:37">
            <div className="h-[32px] overflow-clip relative shrink-0 w-[109px]" data-name="Image" data-node-id="1:38">
              <div className="absolute border border-solid border-white inset-[0_77px_0_0] rounded-[100px]" data-name="gBnkhJ17BmtTHqpLjPkAeWdN8U.png" data-node-id="1:39">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                  <img alt="" className="absolute h-[132.81%] left-0 max-w-none top-[-16.41%] w-full" src={imgGBnkhJ17BmtTHqpLjPkAeWdN8UPng} />
                </div>
              </div>
              <div className="absolute bottom-0 left-[22px] top-0 w-[32px]" data-name="Mask Group" data-node-id="1:40">
                <div className="absolute border border-solid border-white inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[32px_100%] rounded-[100px]" data-name="zfmF1iFYDX2iAwx2tDdmHAHKsKY.png" data-node-id="1:42" style={{ maskImage: `url('${imgZfmF1IFydx2IAwx2TDdmHahKsKyPng}')` }}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgZfmF1IFydx2IAwx2TDdmHahKsKyPng1} />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-[50px] top-0 w-[32px]" data-name="Mask Group" data-node-id="1:43">
                <div className="absolute border border-solid border-white inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[32px_100%] rounded-[100px]" data-name="7IFOWsHVY0RJFR1n6Chu0jDP1jA.png" data-node-id="1:45" style={{ maskImage: `url('${img7IfoWsHvy0Rjfr1N6Chu0JDp1JAPng}')` }}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img7IfoWsHvy0Rjfr1N6Chu0JDp1JAPng1} />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-[76px] top-0 w-[32px]" data-name="Mask Group" data-node-id="1:46">
                <div className="absolute border border-solid border-white inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[32px_100%] rounded-[100px]" data-name="nSJFnEeB2r1YM5Orpw7rRVinGQ.png" data-node-id="1:48" style={{ maskImage: `url('${imgNSjFnEeB2R1Ym5Orpw7RRVinGqPng}')` }}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgNSjFnEeB2R1Ym5Orpw7RRVinGqPng1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="1:49">
              <p className="leading-[22.4px]">+200 brand scaled</p>
            </div>
          </div>
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[136px] justify-center leading-[0] min-w-full relative shrink-0 text-[66px] text-center text-white tracking-[-3px] w-[min-content]" data-node-id="1:50">
            <p className="leading-[78px] whitespace-pre-wrap">{`   We Build AI Platforms and Digital Systems for Saudi Businesses`}</p>
          </div>
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[68px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-[708px] whitespace-pre-wrap" data-node-id="1:51">
            <p className="leading-[32px] mb-0">{`We design and build enterprise-grade AI platforms, applications, `}</p>
            <p className="leading-[32px]">{`and digital systems that are built fast, scalable and robust. `}</p>
          </div>
          <div className="bg-gradient-to-b cursor-pointer from-[#f3e295] h-[48px] overflow-clip relative rounded-[12px] shrink-0 to-[#cfa857] w-[189px]" data-name="Link - Main" data-node-id="1:52">
            <div className="absolute bg-[#affc41] border border-black border-solid inset-[-0.5px_-1px_-0.5px_0] opacity-0" data-name="Highlight" data-node-id="1:53" />
            <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[19.27px] text-[16px] text-black top-[23.3px] whitespace-nowrap" data-node-id="1:54">
              <p className="leading-[19.2px]">Request a Proposal</p>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[-171px] size-[730.872px] top-[302.31px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" }}>
          <div className="flex-none rotate-[9.32deg]">
            <div className="relative size-[636.227px]" data-name="download - 2025-12-30T101455.521 1" data-node-id="1:55">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDownload20251230T1014555211} />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[1112px] size-[730.872px] top-[-307px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" }}>
          <div className="flex-none rotate-[9.32deg]">
            <div className="relative size-[636.227px]" data-name="download - 2025-12-30T101455.521 2" data-node-id="1:56">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDownload20251230T1014555211} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] content-stretch flex flex-col items-start overflow-clip pb-[81px] pt-[71px] px-[33px] relative shrink-0 w-full" data-name="Desktop - 340" data-node-id="1:57">
        <div className="content-end flex flex-wrap gap-[51px_12px] items-end relative shrink-0 w-full" data-node-id="1:58">
          <div className="content-stretch flex flex-col font-medium gap-[20px] items-center leading-[0] not-italic px-[16px] relative shrink-0 text-[#1e1e1e] w-[1374px]" data-node-id="1:59">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center relative shrink-0 text-[0px] tracking-[-3px] whitespace-nowrap" data-node-id="1:60">
              <p className="text-[54px]">
                <span className="font-['Inter:Medium',sans-serif] font-medium leading-[66px] not-italic text-[#b0b0b0] tracking-[-3px]">What Can We</span>
                <span className="leading-[66px] tracking-[-3px]">{` Build`}</span>
                <span className="leading-[66px]">{` `}</span>
                <span className="leading-[66px] tracking-[-3px]">For You?</span>
              </p>
            </div>
            <div className="flex flex-col font-['Inter:Medium','Noto_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[16.2px] text-center tracking-[-0.352px] w-[732px]" data-node-id="1:61">
              <p className="leading-[22.88px]">Think of us as the team that builds and modernizes large digital systems, for organizations that want to upgrade what they already have or build something new properly.</p>
            </div>
          </div>
          <div className="bg-[#f3f3f3] h-[612px] relative rounded-[17px] shrink-0 w-[450px]" data-name="Group - 1 of 4" data-node-id="1:62">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[40px] not-italic text-[#1e1e1e] text-[14px] top-[48px] whitespace-nowrap" data-node-id="1:63">
              <p className="leading-[17.08px]">( 001 )</p>
            </div>
            <div className="absolute left-[197px] overflow-clip size-[56px] top-[104px]" data-name="6904ca7a4abbe56dfff89559_service-icon-01.svg" data-node-id="1:64">
              <div className="absolute left-0 overflow-clip size-[56px] top-0" data-name="6904ca7a4abbe56dfff89559_service-icon-01.svg fill" data-node-id="1:65">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[56px] top-1/2" data-name="6904ca7a4abbe56dfff89559_service-icon-01.svg" data-node-id="1:66">
                  <img alt="" className="absolute block max-w-none size-full" src={img6904Ca7A4Abbe56Dfff89559ServiceIcon01Svg} />
                </div>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[40px] not-italic text-[#1e1e1e] text-[23px] top-[237px] w-[248px]" data-node-id="1:68">
              <p className="leading-[36px]">Enterprise AI Platforms</p>
            </div>
            <div className="absolute content-stretch flex flex-col font-normal gap-[13px] items-start leading-[0] left-[40px] not-italic top-[289px] w-[347px]" data-node-id="1:69">
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] h-[51px] justify-center relative shrink-0 text-[#1e1e1e] text-[12.7px] w-full" data-node-id="1:70">
                <p className="leading-[19.71px]">{`These are full AI-based systems, delivered as web platforms or internal dashboards used across the organization. `}</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Bold','Noto_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#131313] text-[0px] tracking-[-0.2323px] w-full" data-node-id="1:71">
                <p className="font-['Inter:Bold','Noto_Sans:Bold','Noto_Sans:Regular',sans-serif] font-bold leading-[23.226px] mb-0 text-[14px] text-black whitespace-pre-wrap">{`They can include: `}</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                    <span className="font-['Inter:Regular','Noto_Sans:Bold','Noto_Sans:Regular',sans-serif] font-normal leading-[19.71px] not-italic text-[#1e1e1e] text-[12.7px]">{`Web-based AI platforms for leadership and teams `}</span>
                  </li>
                  <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                    <span className="font-['Inter:Regular','Noto_Sans:Bold','Noto_Sans:Regular',sans-serif] font-normal leading-[19.71px] not-italic text-[#1e1e1e] text-[12.7px]">{`AI systems that automate daily work and processes `}</span>
                  </li>
                  <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                    <span className="font-['Inter:Regular','Noto_Sans:Bold','Noto_Sans:Regular',sans-serif] font-normal leading-[19.71px] not-italic text-[#1e1e1e] text-[12.7px]">{`AI dashboards that analyze data and show insights clearly `}</span>
                  </li>
                  <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                    <span className="font-['Inter:Regular','Noto_Sans:Bold','Noto_Sans:Regular',sans-serif] font-normal leading-[19.71px] not-italic text-[#1e1e1e] text-[12.7px]">{`AI features built into existing web or mobile applications `}</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#1e1e1e] text-[12.7px] w-full whitespace-pre-wrap" data-node-id="1:72">
                <p className="leading-[19.71px] mb-0">{`These are used by teams, reviewed by management, and designed to scale with `}</p>
                <p className="leading-[19.71px]">{`the organization. `}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#cfffb2] h-[612px] relative rounded-[17px] shrink-0 w-[450px]" data-name="Group - 2 of 4" data-node-id="1:73">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[40px] not-italic text-[#1e1e1e] text-[14px] top-[48px] whitespace-nowrap" data-node-id="1:74">
              <p className="leading-[17.08px]">( 002 )</p>
            </div>
            <div className="absolute left-[197px] overflow-clip size-[56px] top-[104px]" data-name="6904ca7a4abbe56dfff89556_service-icon-02.svg" data-node-id="1:75">
              <div className="absolute left-0 overflow-clip size-[56px] top-0" data-name="6904ca7a4abbe56dfff89556_service-icon-02.svg fill" data-node-id="1:76">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[56px] left-1/2 top-1/2 w-[55.691px]" data-name="6904ca7a4abbe56dfff89556_service-icon-02.svg" data-node-id="1:77">
                  <img alt="" className="absolute block max-w-none size-full" src={img6904Ca7A4Abbe56Dfff89556ServiceIcon02Svg} />
                </div>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[40px] not-italic text-[#1e1e1e] text-[23px] top-[237px] w-[312px]" data-node-id="1:80">
              <p className="leading-[36px]">Full-Scale Custom Platforms</p>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[13px] items-start leading-[0] left-[40px] not-italic top-[289px] w-[343.548px]" data-node-id="1:81">
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1e1e1e] text-[12.7px] w-full" data-node-id="1:82">
                <p className="leading-[19.71px]">{`These are complete digital platforms, usually delivered as: `}</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1e1e1e] text-[12.7px] w-full" data-node-id="1:83">
                <ul className="list-disc">
                  <li className="mb-0 ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">{`Web applications `}</span>
                  </li>
                  <li className="mb-0 ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">{`Mobile apps (iOS & Android) `}</span>
                  </li>
                  <li className="ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">Or a combination of both</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[14px] text-black tracking-[-0.2323px] w-full" data-node-id="1:84">
                <p className="leading-[23.226px]">They typically include:</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1e1e1e] text-[12.7px] w-full" data-node-id="1:85">
                <ul className="list-disc">
                  <li className="mb-0 ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">{`Customer or user-facing apps or portals `}</span>
                  </li>
                  <li className="mb-0 ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">{`Internal admin systems to manage everything `}</span>
                  </li>
                  <li className="ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">Access control, reports, and workflows</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1e1e1e] text-[12.7px] w-full" data-node-id="1:86">
                <p className="leading-[19.71px]">If you are replacing an old system or building a new one, we deliver a complete, usable platform.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f3f3f3] h-[612px] relative rounded-[17px] shrink-0 w-[450px]" data-name="Group - 3 of 4" data-node-id="1:87">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[40px] not-italic text-[#1e1e1e] text-[14px] top-[48px] whitespace-nowrap" data-node-id="1:88">
              <p className="leading-[17.08px]">( 003 )</p>
            </div>
            <div className="absolute left-[197px] overflow-clip size-[56px] top-[104px]" data-name="6904ca7a4abbe56dfff89558_service-icon-03.svg" data-node-id="1:89">
              <div className="absolute left-0 overflow-clip size-[56px] top-0" data-name="6904ca7a4abbe56dfff89558_service-icon-03.svg fill" data-node-id="1:90">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[56px] top-1/2" data-name="6904ca7a4abbe56dfff89558_service-icon-03.svg" data-node-id="1:91">
                  <img alt="" className="absolute block max-w-none size-full" src={img6904Ca7A4Abbe56Dfff89558ServiceIcon03Svg} />
                </div>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[40px] not-italic text-[#1e1e1e] text-[23px] top-[237px] w-[347px]" data-node-id="1:93">
              <p className="leading-[36px]">Minimum Viable Products (MVPs)</p>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[13px] items-start leading-[0] left-[40px] not-italic top-[289px] w-[343.548px]" data-node-id="1:94">
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1e1e1e] text-[12.7px] w-full" data-node-id="1:95">
                <p className="leading-[19.71px]">Sometimes, the right first step is a smaller version of a large system. An MVP can be:</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1e1e1e] text-[12.7px] w-full" data-node-id="1:96">
                <ul className="list-disc">
                  <li className="mb-0 ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">{`A simple web application `}</span>
                  </li>
                  <li className="mb-0 ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">{`A first version of a mobile app `}</span>
                  </li>
                  <li className="ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">{`An internal tool for a specific team `}</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[14px] text-black tracking-[-0.2323px] w-full" data-node-id="1:97">
                <p className="leading-[23.226px]">We build MVPs so you can:</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1e1e1e] text-[12.7px] w-full" data-node-id="1:98">
                <ul className="list-disc">
                  <li className="mb-0 ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">{`Test the system before full rollout `}</span>
                  </li>
                  <li className="mb-0 ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">{`Improve or replace existing processes safely `}</span>
                  </li>
                  <li className="mb-0 ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">{`See how real users use the system `}</span>
                  </li>
                  <li className="ms-[19.049999999999997px]">
                    <span className="leading-[19.71px]">Decide what to scale next</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1e1e1e] text-[12.7px] w-full" data-node-id="1:99">
                <p className="leading-[19.71px]">The MVP is not temporary, it becomes the base for the final system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[42px] items-center overflow-clip pb-[61px] pt-[49px] px-[49px] relative shrink-0 w-full" data-name="Desktop - 337" data-node-id="1:100">
        <div className="flex flex-col font-['Inter:Medium','Noto_Sans:SemiBold',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[42px] text-center tracking-[-1.68px] w-full" data-node-id="1:101">
          <p className="font-['Inter:Semi_Bold','Noto_Sans:SemiBold',sans-serif] font-semibold tracking-[-0.64px]">
            <span className="leading-[50.4px] text-[#b0b0b0]">Growing Saudi Industries</span>
            <span className="leading-[50.4px]">{` We Love to Work With`}</span>
          </p>
        </div>
        
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:102">
          {industriesData.map((ind, i) => {
            const isActive = activeIndustry === i;
            return (
              <div
                key={ind.id}
                onClick={() => setActiveIndustry(i)}
                className={`overflow-clip relative shrink-0 w-full transition-all duration-500 ease-in-out cursor-pointer ${isActive ? 'bg-[#12543c] rounded-[12px]' : 'bg-[#f6f6f6] rounded-[12px]'}`}
                style={{ height: isActive ? '231.59px' : '80px' }}
              >
                {/* Number & Dot */}
                <div className={`absolute top-[calc(50%-17.6px)] ${isActive ? 'top-[41px]' : ''} transition-all duration-500 w-[76.91px] left-[20px]`}>
                  <div className="absolute h-[35.2px] left-0 overflow-clip right-[47px] top-[8px]">
                    <div className={`absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[39px] justify-center leading-[0] left-0 text-[27.8px] ${isActive ? 'text-white' : 'text-[#525252]'}`}>
                      <p className="leading-[35.2px]">{ind.index}</p>
                    </div>
                  </div>
                  <div className={`absolute rounded-[90px] size-[7px] top-[26.5px] left-[34.96px] ${isActive ? 'bg-[#f4ff00]' : 'bg-[#525252]'}`} />
                </div>
                
                {/* Title & Conditional Content */}
                <div className={`absolute left-[113px] ${isActive ? 'top-[43px]' : 'top-[22.5px]'} transition-all duration-500 w-[747.09px]`}>
                  <div className="absolute flex flex-col gap-[17px] items-start left-0 top-0 w-[456px]">
                    <div className={`flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center text-[29.6px] ${isActive ? 'text-[33.5px] tracking-[-1.5px] text-white' : 'text-[#525252] tracking-[-1px]'} transition-all duration-300`}>
                      <p className="leading-[35.2px]">{ind.title}</p>
                    </div>
                    
                    <div className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center text-[#b0b0b0] text-[12.8px] tracking-[-0.2px] transition-opacity duration-300 ${isActive ? 'opacity-100 h-[37px] visible' : 'opacity-0 h-0 invisible overflow-hidden'}`}>
                      <p className="leading-[21px]">{ind.subtitle}</p>
                    </div>
                    
                    <div className={`cursor-pointer flex flex-row items-center gap-[5px] w-fit transition-all duration-300 hover:opacity-80 ${isActive ? 'opacity-100 visible' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
                      <div className="flex items-center justify-center border border-white rounded-[90px] h-[37px] px-[20px]">
                        <span className="text-white text-[12.6px] font-['Inter:Regular',sans-serif]">Explore More</span>
                      </div>
                      <div className="bg-white rounded-[90px] w-[37px] h-[37px] flex items-center justify-center shrink-0">
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.5 12.5L7.5 7.5L2.5 2.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Image (Active Only) */}
                <div className={`absolute h-[184px] left-[1015px] overflow-clip top-[24px] w-[188px] transition-opacity duration-300 ${isActive ? 'opacity-100 visible' : 'opacity-0 invisible hidden'}`}>
                  <div className="absolute inset-[0_-0.01px_0_0] overflow-clip rounded-[11px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[11px]">
                      <img alt="" className="absolute h-full left-[-23.53%] max-w-none top-0 w-[147.06%]" src={ind.image1} />
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[184px] left-[calc(50%+0.5px)] rounded-[12px] top-1/2 w-[203px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                        <img alt="" className="absolute h-[108.84%] left-[-21.06%] max-w-none top-0 w-[142.12%]" src={ind.image2} />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Minus/Plus Icon */}
                <div className={`absolute overflow-clip rounded-[90px] top-[calc(50%-20px)] left-[1264px] ${isActive ? 'bg-[#f6ff2a] size-[60px] top-[calc(50%-30px)] left-[1250px] shadow-sm' : 'bg-[#12543c] size-[40px]'} transition-all duration-300`}>
                  {isActive && <div className="absolute border border-solid inset-0 rounded-[90px] border-[#ededed]" />}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0e0d0a] h-[2px] rounded-[90px] w-[12px] ${isActive ? 'bg-[#0e0d0a]' : 'bg-[#f6ff2a]'}`} />
                  {!isActive && (
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 -rotate-90">
                      <div className="bg-[#f6ff2a] h-[2px] rounded-[90px] w-[12px]" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white h-[987px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 332" data-node-id="1:181">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#12543c] h-[855px] left-[calc(50%+0.5px)] overflow-clip rounded-[12px] top-1/2 w-[1337px]" data-node-id="1:182">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[855px] left-[calc(50%-0.5px)] top-1/2 w-[1520px]" data-name="naveed-anjum-r0974PKXadE-unsplash 1" data-node-id="1:183">
            <img alt="" className="absolute inset-0 max-w-none object-cover opacity-28 pointer-events-none size-full" src={imgNaveedAnjumR0974PkXadEUnsplash1} />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.55px)] size-[313.685px] top-[calc(50%-50.2px)]" data-node-id="1:184">
            <div className="absolute inset-[-91.29%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse2092} />
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[59px] items-center leading-[0] left-[calc(50%+0.5px)] top-[calc(50%+0.12px)] w-[1200px]" data-node-id="1:185">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center min-w-full not-italic relative shrink-0 text-[42px] text-center text-white w-[min-content]" data-node-id="1:186">
              <p className="leading-[50.4px]">Our Seamless Process</p>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="1:187">
              <div className="bg-white col-1 h-[250.81px] ml-[210.91px] mt-[350.42px] overflow-clip relative rounded-[16px] row-1 shadow-[0px_0px_0px_8px_rgba(255,255,255,0.14),12px_16px_16px_0px_rgba(0,0,0,0.1)] w-[384px]" data-name="Card Item → Variant 1" data-node-id="1:188">
                <div className="absolute h-[89.998px] left-[32px] overflow-clip right-[32px] top-[32px]" data-name="Container" data-node-id="1:189">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[87.001px] justify-center leading-[0] left-[0.01px] not-italic text-[72px] text-black top-[44.5px] tracking-[-4.32px] w-[36.274px]" data-node-id="1:190">
                    <p className="leading-[90px]">4</p>
                  </div>
                </div>
                <div className="absolute font-normal h-[96.811px] leading-[0] left-[32px] not-italic overflow-clip right-[32px] top-[122px]" data-name="Paragraph" data-node-id="1:191">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center left-[0.01px] text-[22.1px] text-black top-[18.5px] tracking-[-0.48px] whitespace-nowrap" data-node-id="1:192">
                    <p className="leading-[38.4px]">{`Build & Integrate`}</p>
                  </div>
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] justify-center left-0 text-[14.6px] text-[rgba(0,0,0,0.5)] top-[67.91px] w-[293.133px]" data-node-id="1:193">
                    <p className="leading-[27.2px]">{`We build the platform, application, or AI system and connect it where needed. `}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white col-1 h-[250.81px] ml-[621.2px] mt-[348.84px] overflow-clip relative rounded-[16px] row-1 shadow-[0px_0px_0px_8px_rgba(255,255,255,0.14),12px_16px_16px_0px_rgba(0,0,0,0.1)] w-[384px]" data-name="Card Item → Variant 2" data-node-id="1:194">
                <div className="absolute h-[90.002px] left-[32px] overflow-clip right-[32px] top-[32px]" data-name="Container" data-node-id="1:195">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[86.991px] justify-center leading-[0] left-0 not-italic text-[72px] text-black top-[44.5px] tracking-[-4.32px] w-[21.973px]" data-node-id="1:196">
                    <p className="leading-[90px]">5</p>
                  </div>
                </div>
                <div className="absolute font-normal h-[96.809px] leading-[0] left-[32px] not-italic overflow-clip right-[32px] top-[122px]" data-name="Paragraph" data-node-id="1:197">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center left-0 text-[21.9px] text-black top-[18.5px] tracking-[-0.48px] whitespace-nowrap" data-node-id="1:198">
                    <p className="leading-[38.4px]">{`Review & Deliver`}</p>
                  </div>
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] justify-center left-0 text-[14.6px] text-[rgba(0,0,0,0.5)] top-[67.9px] w-[298.971px]" data-node-id="1:199">
                    <p className="leading-[27.2px]">{`We test, launch, and hand over the complete system with full access. `}</p>
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[126.297px] items-center justify-center ml-[497px] mt-[272.84px] relative row-1 w-[192.393px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" }}>
                <div className="flex-none rotate-[82.03deg]">
                  <div className="h-[179.944px] relative w-[102.343px]" data-name="Vector" data-node-id="1:200">
                    <div className="absolute inset-[-0.58%_-1.02%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 h-[314.81px] ml-0 mt-0 relative row-1 w-[1200px]" data-name="Cards" data-node-id="1:201">
                <div className="absolute bg-white inset-[62px_816px_2px_0] overflow-clip rounded-[16px] shadow-[0px_0px_0px_8px_rgba(255,255,255,0.14),12px_16px_16px_0px_rgba(0,0,0,0.1)]" data-name="Card Item → Variant 1" data-node-id="1:202">
                  <div className="absolute h-[90.002px] left-[32.01px] overflow-clip right-[32px] top-[26.57px]" data-name="Container" data-node-id="1:203">
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[86.991px] justify-center leading-[0] left-0 not-italic text-[72px] text-black top-[44.5px] tracking-[-4.32px] w-[21.973px]" data-node-id="1:204">
                      <p className="leading-[90px]">1</p>
                    </div>
                  </div>
                  <div className="absolute h-[111.102px] left-[32.13px] overflow-clip right-[31.87px] top-[111.49px]" data-name="Paragraph" data-node-id="1:205">
                    <div className="-translate-y-1/2 absolute flex h-[53.702px] items-center justify-center left-[0.64px] top-[27.48px] w-[222.559px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" }}>
                      <div className="flex-none rotate-[-0.44deg]">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative text-[21.9px] text-black tracking-[-0.48px] w-[222.167px]" data-node-id="1:206">
                          <p className="leading-[26px]">Understand the Requirement</p>
                        </div>
                      </div>
                    </div>
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[-0.65px] not-italic text-[14.6px] text-[rgba(0,0,0,0.5)] top-[83.72px] w-[311.519px]" data-node-id="1:207">
                      <p className="leading-[27.2px]">{`We understand the business needs, users, and existing systems (if any). `}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white inset-[0_408px_64px_408px] overflow-clip rounded-[16px] shadow-[0px_0px_0px_8px_rgba(255,255,255,0.14),12px_16px_16px_0px_rgba(0,0,0,0.1)]" data-name="Card Item → Variant 1" data-node-id="1:208">
                  <div className="absolute h-[89.998px] left-[32px] overflow-clip right-[32px] top-[32px]" data-name="Container" data-node-id="1:209">
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[87.001px] justify-center leading-[0] left-[0.01px] not-italic text-[72px] text-black top-[44.5px] tracking-[-4.32px] w-[36.274px]" data-node-id="1:210">
                      <p className="leading-[90px]">2</p>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] not-italic text-[22.1px] text-black top-[140.49px] tracking-[-0.48px] whitespace-nowrap" data-node-id="1:211">
                    <p className="leading-[38.4px]">Define the Solution</p>
                  </div>
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal h-[49.214px] justify-center leading-[0] left-[31.74px] not-italic text-[14.6px] text-[rgba(0,0,0,0.5)] top-[182.07px] w-[280.406px]" data-node-id="1:212">
                    <p className="leading-[27.2px]">{`We clearly define what will be built and what the first version includes. `}</p>
                  </div>
                </div>
                <div className="absolute bg-white inset-[64px_0_0_816px] overflow-clip rounded-[16px] shadow-[0px_0px_0px_8px_rgba(255,255,255,0.14),12px_16px_16px_0px_rgba(0,0,0,0.1)]" data-name="Card Item → Variant 1" data-node-id="1:213">
                  <div className="absolute h-[90.003px] left-[32px] overflow-clip right-[32px] top-[32px]" data-name="Container" data-node-id="1:214">
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[87px] justify-center leading-[0] left-0 not-italic text-[72px] text-black top-[44.5px] tracking-[-4.32px] w-[39.003px]" data-node-id="1:215">
                      <p className="leading-[90px]">3</p>
                    </div>
                  </div>
                  <div className="absolute font-normal h-[96.813px] leading-[0] left-[32px] not-italic overflow-clip right-[32px] top-[122px]" data-name="Paragraph" data-node-id="1:216">
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center left-0 text-[22.1px] text-black top-[18.5px] tracking-[-0.48px] whitespace-nowrap" data-node-id="1:217">
                      <p className="leading-[38.4px]">Design the System</p>
                    </div>
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] justify-center left-0 text-[14.6px] text-[rgba(0,0,0,0.5)] top-[67.9px] w-[304.376px]" data-node-id="1:218">
                      <p className="leading-[27.2px]">{`We design the user experience, flows, and admin controls for approval. `}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute flex inset-[-40.26px_725.13px_183.56px_221.13px] items-center justify-center">
                  <div className="-rotate-25 flex-none h-[75px] w-[245px]">
                    <div className="relative size-full" data-name="1 - Animate → SVG" data-node-id="1:219">
                      <img alt="" className="absolute block max-w-none size-full" src={img1AnimateSvg} />
                    </div>
                  </div>
                </div>
                <div className="absolute flex inset-[24.67px_289.04px_124.86px_699.01px] items-center justify-center">
                  <div className="-rotate-75 flex-none h-[187px] w-[121px]">
                    <div className="relative size-full" data-name="Variant 2 → SVG" data-node-id="1:221">
                      <div className="absolute inset-[-15.2%_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgVariant2Svg} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[358px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 333" data-node-id="1:223">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#12543c] h-[223.207px] left-1/2 overflow-clip rounded-[14.064px] top-[calc(50%+4.22px)] w-[1172px]" data-name="Dekstop → Container" data-node-id="1:224">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[45.708px] items-center left-[calc(50%+0.59px)] top-[calc(50%-0.23px)] w-[1032.532px]" data-node-id="1:225">
            <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[26px] text-center text-white w-full" data-node-id="1:226">
              <p className="leading-[26.253px]">{`Our Stack & Strategic Partners`}</p>
            </div>
            <div className="content-stretch flex gap-[23.44px] items-center relative shrink-0 w-full" data-node-id="1:227">
              <div className="bg-[rgba(246,246,246,0.17)] border-[1.172px] border-[rgba(255,255,255,0.24)] border-solid h-[56.162px] overflow-clip relative rounded-[117.2px] shrink-0 w-[158.22px]" data-name="Logo 1" data-node-id="1:228">
                <div className="absolute inset-[11.64px_29.72px_10.59px_29.89px]" data-name="logos:google" data-node-id="1:229">
                  <img alt="" className="absolute block max-w-none size-full" src={imgLogosGoogle} />
                </div>
              </div>
              <div className="bg-[rgba(246,246,246,0.17)] border-[1.172px] border-[rgba(255,255,255,0.24)] border-solid h-[56.256px] overflow-clip relative rounded-[117.2px] shrink-0 w-[158.22px]" data-name="Logo 2" data-node-id="1:236">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[28.064px] left-[calc(50%+0.12px)] top-[calc(50%-0.06px)] w-[103.372px]" data-name="logos:zapier" data-node-id="1:237">
                  <img alt="" className="absolute block max-w-none size-full" src={imgLogosZapier} />
                </div>
              </div>
              <div className="bg-[rgba(246,246,246,0.17)] border-[1.172px] border-[rgba(255,255,255,0.24)] border-solid h-[56.162px] overflow-clip relative rounded-[117.2px] shrink-0 w-[147.672px]" data-name="Logo 3" data-node-id="1:240">
                <div className="absolute inset-[15.15px_12.05px_15.73px_14.65px]" data-name="logos:supabase" data-node-id="1:241">
                  <img alt="" className="absolute block max-w-none size-full" src={imgLogosSupabase} />
                </div>
              </div>
              <div className="bg-[rgba(246,246,246,0.17)] border-[1.172px] border-[rgba(255,255,255,0.24)] border-solid h-[56.315px] overflow-clip relative rounded-[117.2px] shrink-0 w-[167.596px]" data-name="Logo 4" data-node-id="1:246">
                <div className="absolute inset-[12.89px_20.55px_12.68px_19.34px]" data-name="logos:snowflake" data-node-id="1:247">
                  <img alt="" className="absolute block max-w-none size-full" src={imgLogosSnowflake} />
                </div>
              </div>
              <div className="bg-[rgba(246,246,246,0.17)] border-[1.172px] border-[rgba(255,255,255,0.24)] border-solid h-[56.162px] overflow-clip relative rounded-[117.2px] shrink-0 w-[151.188px]" data-name="Logo 5" data-node-id="1:249">
                <div className="absolute inset-[12.81px_21.74px_14.04px_21.68px]" data-name="logos:docker" data-node-id="1:250">
                  <img alt="" className="absolute block max-w-none size-full" src={imgLogosDocker} />
                </div>
              </div>
              <div className="bg-[rgba(246,246,246,0.17)] border-[1.172px] border-[rgba(255,255,255,0.24)] border-solid h-[56.256px] overflow-clip relative rounded-[117.2px] shrink-0 w-[132.436px]" data-name="Logo 6" data-node-id="1:252">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[22.382px] left-[calc(50%-0.23px)] top-[calc(50%-0.55px)] w-[90.951px]" data-name="logos:openai" data-node-id="1:253">
                  <img alt="" className="absolute block max-w-none size-full" src={imgLogosOpenai} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute border-[#f6f6f6] border-[1.172px] border-solid inset-0" data-name="Border" data-node-id="1:255" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.16px)] size-[313.685px] top-[calc(50%+266.07px)]" data-node-id="1:256">
            <div className="absolute inset-[-91.29%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse2092} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f7f7] h-[1100px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 338" data-node-id="1:257">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[60px] items-center left-[calc(50%+0.5px)] top-[calc(50%+51.59px)] w-[1155px]" data-node-id="1:258">
          <div className="flex flex-col font-['Inter:Semi_Bold','Noto_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[0px] text-center tracking-[-1.68px] w-full" data-node-id="1:259">
            <p className="text-[42px]">
              <span className="leading-[50.4px]">{`Why Organizations `}</span>
              <span className="font-['Inter:Semi_Bold','Noto_Sans:SemiBold',sans-serif] font-semibold leading-[50.4px] not-italic text-[#212121] tracking-[-1.68px]">{`Choose Us `}</span>
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[46px] items-center relative shrink-0 w-full" data-node-id="1:260">
            <div className="content-stretch flex gap-[33px] items-center relative shrink-0 w-full" data-node-id="1:261">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[363px]" data-node-id="1:262">
                <div className="bg-white border border-[rgba(58,56,57,0.45)] border-solid h-[355px] relative rounded-[12px] shrink-0 w-full" data-name="Desktop" data-node-id="1:263">
                  <div className="absolute border border-[rgba(247,247,247,0)] border-solid inset-[-32px_-0.67px_-104.8px_-1px] rounded-[40px]" data-name="Border" data-node-id="1:264" />
                  <div className="absolute content-stretch flex flex-col gap-[7px] items-start leading-[0] left-[23px] not-italic text-[#131313] top-[141px] w-[283px]" data-node-id="1:265">
                    <div className="flex flex-col font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[0px] tracking-[-1.8px] w-[265px]" data-node-id="1:266">
                      <p className="text-[32px]">
                        <span className="leading-[40px]">{`AI `}</span>
                        <span className="leading-[40px] lowercase">I</span>
                        <span className="leading-[40px]">{`s Core to What We Build `}</span>
                      </p>
                    </div>
                    <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.2323px] w-[253px]" data-node-id="1:267">
                      <p className="leading-[26px]">We don’t add AI as a feature. We design systems where AI is part of the foundation</p>
                    </div>
                  </div>
                  <div className="absolute left-[23px] overflow-clip size-[86px] top-[31px]" data-name="Frame" data-node-id="1:268">
                    <div className="absolute contents inset-0" data-name="Group" data-node-id="1:269">
                      <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[363px]" data-node-id="1:280">
                <div className="bg-white border border-[rgba(58,56,57,0.45)] border-solid h-[355px] relative rounded-[12px] shrink-0 w-full" data-name="Desktop" data-node-id="1:281">
                  <div className="absolute border border-[rgba(247,247,247,0)] border-solid inset-[-32px_-0.67px_-104.8px_-1px] rounded-[40px]" data-name="Border" data-node-id="1:282" />
                  <div className="absolute content-stretch flex flex-col gap-[7px] items-start leading-[0] left-[23px] not-italic text-[#131313] top-[141px] w-[283px]" data-node-id="1:283">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[0px] tracking-[-1.8px] w-[265px]" data-node-id="1:284">
                      <p className="text-[32px]">
                        <span className="leading-[40px]">{`Built for Real-World `}</span>
                        <span className="leading-[40px] lowercase">U</span>
                        <span className="leading-[40px]">se</span>
                      </p>
                    </div>
                    <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[16px] tracking-[-0.2323px] w-[min-content]" data-node-id="1:285">
                      <p className="leading-[26px]">{`Our platforms are designed to run daily operations, not proofs of concept. `}</p>
                    </div>
                  </div>
                  <div className="absolute left-[23px] overflow-clip size-[82px] top-[33px]" data-name="Frame" data-node-id="1:286">
                    <div className="absolute contents inset-[6.72%_3.66%_0.57%_3.63%]" data-name="Group" data-node-id="1:287">
                      <div className="absolute inset-[6.72%_3.66%_0.57%_3.63%]" data-name="Group" data-node-id="1:288">
                        <img alt="" className="absolute block max-w-none size-full" src={imgGroup1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[363px]" data-node-id="1:294">
                <div className="bg-white border border-[rgba(58,56,57,0.45)] border-solid h-[355px] relative rounded-[12px] shrink-0 w-full" data-name="Desktop" data-node-id="1:295">
                  <div className="absolute border border-[rgba(247,247,247,0)] border-solid inset-[-32px_-0.67px_-104.8px_-1px] rounded-[40px]" data-name="Border" data-node-id="1:296" />
                  <div className="absolute content-stretch flex flex-col gap-[7px] items-start leading-[0] left-[23px] not-italic text-[#131313] top-[141px] w-[283px]" data-node-id="1:297">
                    <div className="flex flex-col font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] tracking-[-1.8px] w-[265px]" data-node-id="1:298">
                      <p className="leading-[40px]">{`One Team, Full Responsibility `}</p>
                    </div>
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.2323px] w-[253px]" data-node-id="1:299">
                      <p className="leading-[26px]">Strategy, design, engineering, and delivery handled end to end with effective communication.</p>
                    </div>
                  </div>
                  <div className="absolute left-[23px] overflow-clip size-[69px] top-[40px]" data-name="Frame" data-node-id="1:300">
                    <img alt="" className="absolute block max-w-none size-full" src={imgFrame} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[33px] items-center relative shrink-0" data-node-id="1:325">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[363px]" data-node-id="1:326">
                <div className="bg-white border border-[rgba(58,56,57,0.45)] border-solid h-[355px] relative rounded-[12px] shrink-0 w-full" data-name="Desktop" data-node-id="1:327">
                  <div className="absolute border border-[rgba(247,247,247,0)] border-solid inset-[-32px_-0.67px_-104.8px_-1px] rounded-[40px]" data-name="Border" data-node-id="1:328" />
                  <div className="absolute content-stretch flex flex-col gap-[7px] items-start leading-[0] left-[23px] not-italic text-[#131313] top-[141px] w-[283px]" data-node-id="1:329">
                    <div className="flex flex-col font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] tracking-[-1.8px] w-[265px]" data-node-id="1:330">
                      <p className="leading-[40px]">{`Designed to Last `}</p>
                    </div>
                    <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.2323px] w-[253px]" data-node-id="1:331">
                      <p className="leading-[26px]">{`Systems are built to evolve, expand, and integrate over time. `}</p>
                    </div>
                  </div>
                  <div className="absolute left-[23px] overflow-clip size-[83px] top-[31px]" data-name="Frame" data-node-id="1:332">
                    <div className="absolute inset-[1.37%_4.64%]" data-name="Group" data-node-id="1:333">
                      <img alt="" className="absolute block max-w-none size-full" src={imgGroup2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[363px]" data-node-id="1:344">
                <div className="bg-white border border-[rgba(58,56,57,0.45)] border-solid h-[355px] relative rounded-[12px] shrink-0 w-full" data-name="Desktop" data-node-id="1:345">
                  <div className="absolute border border-[rgba(247,247,247,0)] border-solid inset-[-32px_-0.67px_-104.8px_-1px] rounded-[40px]" data-name="Border" data-node-id="1:346" />
                  <div className="absolute content-stretch flex flex-col gap-[7px] items-start leading-[0] left-[23px] not-italic text-[#131313] top-[135px] w-[283px]" data-node-id="1:347">
                    <div className="flex flex-col font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] tracking-[-1.8px] w-[346px]" data-node-id="1:348">
                      <p className="leading-[40px]">{`You Own the System Completely `}</p>
                    </div>
                    <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.2323px] w-[253px]" data-node-id="1:349">
                      <p className="leading-[26px]">{`Full access. Full control. No dependency. `}</p>
                    </div>
                  </div>
                  <div className="absolute left-[23px] overflow-clip size-[87px] top-[31px]" data-name="Frame" data-node-id="1:350">
                    <div className="absolute inset-[6.25%_6.25%_6.25%_12.5%]" data-name="Group" data-node-id="1:351">
                      <img alt="" className="absolute block max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[645px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 339" data-node-id="1:372">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[441px] items-center justify-center left-[calc(50%+0.5px)] rounded-[12px] top-1/2 w-[1125px]" data-node-id="1:373">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
            <div className="absolute bg-[#12543c] inset-0 rounded-[12px]" />
            <img alt="" className="absolute max-w-none object-cover opacity-24 rounded-[12px] size-full" src={imgFrame2147227603} />
          </div>
          <div className="content-stretch flex flex-col gap-[26px] items-center relative shrink-0 w-[731px]" data-node-id="1:374">
            <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[136px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[66px] text-center text-white tracking-[-2px] w-[min-content]" data-node-id="1:375">
              <p className="leading-[76px]">Let’s Discuss Your Requirement</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap" data-node-id="1:376">
              <p className="leading-[34px] mb-0 whitespace-pre">{`If you’re planning to build or upgrade a digital system, platform, or AI solution, `}</p>
              <p className="leading-[34px] whitespace-pre">{`fill the form below and we’ll respond with a clear proposal within 24 hours. `}</p>
            </div>
            <div className="bg-white h-[48px] overflow-clip relative rounded-[100px] shadow-[0.237px_0.711px_1.05px_-0.2px_rgba(0,0,0,0.05),0.646px_1.937px_2.859px_-0.4px_rgba(0,0,0,0.06),1.418px_4.253px_6.277px_-0.6px_rgba(0,0,0,0.08),3.147px_9.441px_13.933px_-0.8px_rgba(0,0,0,0.11),8px_24px_35.417px_-1px_rgba(0,0,0,0.2)] shrink-0 w-[189px]" data-name="Link - Main" data-node-id="1:377">
              <div className="absolute bg-[#affc41] inset-[0_5px_0_0] opacity-0" data-name="Highlight" data-node-id="1:378" />
              <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-48.5px)] text-[16px] text-black top-[23.8px] whitespace-nowrap" data-node-id="1:379">
                <p className="leading-[19.2px]">Submit Form</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2c2a2a] h-[164px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 327" data-node-id="1:380">
        <div className="absolute content-stretch flex flex-col font-normal items-start leading-[0] left-[60px] not-italic pb-[9px] text-white top-[47px] w-[355px]" data-node-id="1:381">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center mb-[-9px] relative shrink-0 text-[30px] w-full" data-node-id="1:382">
            <p className="leading-[63px]">Prefer to speak directly?</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] justify-center mb-[-9px] relative shrink-0 text-[16px] tracking-[-0.24px] w-full" data-node-id="1:383">
            <p className="leading-[28px]">{`You can also book a call at a time that suits you. `}</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[7px] items-end left-[1039px] top-[30px] w-[355px]" data-node-id="1:384">
          <div className="bg-white h-[44px] relative rounded-[73px] shrink-0 w-[170px]" data-name="Content" data-node-id="1:385">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-47px)] not-italic text-[#2c2a2a] text-[18px] top-[22px] tracking-[-0.36px] whitespace-nowrap" data-node-id="1:386">
              <p className="leading-[25.2px]">Book a Call</p>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-right text-white tracking-[-0.24px] w-[min-content]" data-node-id="1:387">
            <p className="leading-[28px]">For organizations, enterprises, and government initiatives in Saudi Arabia</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}