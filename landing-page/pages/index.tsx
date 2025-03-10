import Head from "next/head"
import Image from "next/image"
import { Layout } from "@/components/Layout"
import { TallyForm } from "@/components/forms/TallyForm"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>100 Days of Vibe Coding</title>
        <meta
          name="description"
          content="Join us for 100 days of coding, building, and learning together."
          key="description"
        />
      </Head>
      
      <div className="flex flex-col items-center justify-center py-12">
        {/* 70s Retro Logo SVG */}
        <div className="mb-10 flex justify-center">
          <div className="w-[300px] h-[300px] rounded-lg overflow-hidden">
            <svg viewBox="0 0 600 600" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
              {/* Background with vintage texture */}
              <rect width="600" height="600" fill="#f5e9cb" />
              <filter id="noise" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
                <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" result="result" />
              </filter>
              
              {/* Border frame */}
              <rect x="30" y="30" width="540" height="540" rx="20" ry="20" fill="none" stroke="#222" strokeWidth="14" />
              
              {/* Sunset circle background */}
              <circle cx="300" cy="200" r="150" fill="url(#sunsetGradient)" />
              
              {/* Corner circles */}
              <circle cx="100" cy="100" r="40" fill="url(#orangeGradient)" stroke="#222" strokeWidth="8" />
              <circle cx="500" cy="100" r="40" fill="url(#orangeGradient)" stroke="#222" strokeWidth="8" />
              <circle cx="100" cy="500" r="40" fill="#FF5C4D" stroke="#222" strokeWidth="8" />
              <circle cx="500" cy="500" r="40" fill="#FF5C4D" stroke="#222" strokeWidth="8" />
              
              {/* Wavy rainbow at bottom */}
              <path d="M100,390 C150,350 200,420 250,390 S350,350 400,380 S500,380 550,330" 
                    stroke="#FF5C4D" strokeWidth="30" fill="none" strokeLinecap="round" />
              <path d="M100,430 C150,390 200,460 250,430 S350,390 400,420 S500,420 550,370" 
                    stroke="#FF9342" strokeWidth="30" fill="none" strokeLinecap="round" />
              <path d="M100,470 C150,430 200,500 250,470 S350,430 400,460 S500,460 550,410" 
                    stroke="#FFDA3D" strokeWidth="30" fill="none" strokeLinecap="round" />
              <path d="M100,510 C150,470 200,540 250,510 S350,470 400,500 S500,500 550,450" 
                    stroke="#45C4E9" strokeWidth="30" fill="none" strokeLinecap="round" />
              
              {/* Definitions for gradients */}
              <defs>
                <linearGradient id="sunsetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF5C4D" />
                  <stop offset="40%" stopColor="#FF9342" />
                  <stop offset="70%" stopColor="#FFDA3D" />
                  <stop offset="100%" stopColor="#45C4E9" />
                </linearGradient>
                <radialGradient id="orangeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#FF9342" />
                  <stop offset="100%" stopColor="#FF5C4D" />
                </radialGradient>
              </defs>
              
              {/* "100" Text */}
              <g>
                <text x="180" y="190" fontFamily="Arial, sans-serif" fontSize="150" fontWeight="bold" fill="white" stroke="#222" strokeWidth="8" textAnchor="middle">
                  100
                </text>
              </g>
              
              {/* "DAYS OF" Text */}
              <g>
                <text x="380" y="210" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="white" stroke="#222" strokeWidth="5" textAnchor="middle">
                  DAYS OF
                </text>
              </g>
              
              {/* "VIBE CODING" Text */}
              <g transform="translate(300, 300)">
                <text x="0" y="0" fontFamily="Arial, sans-serif" fontSize="80" fontWeight="bold" fill="white" stroke="#222" strokeWidth="6" textAnchor="middle">
                  VIBE
                </text>
                <text x="0" y="80" fontFamily="Arial, sans-serif" fontSize="80" fontWeight="bold" fill="white" stroke="#222" strokeWidth="6" textAnchor="middle">
                  CODING
                </text>
              </g>
              
              {/* Apply vintage texture */}
              <rect width="600" height="600" fill="transparent" filter="url(#noise)" />
            </svg>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="mb-8 text-5xl font-bold">100 Days of Vibe Coding</h1>
          
          <div className="text-xl leading-relaxed space-y-4">
            <p>
              We&apos;re a crew of MBAs, PMs, BizDev, investors and entrepreneurs pushing ourselves to code for 100 days straight. 
              No fluff—just vibing, building, and staying ahead of AI.
            </p>
            
            <p className="font-medium">
              The only way to learn is to do.
            </p>
            
            <p>
              Let&apos;s hold each other accountable and make ideas happen.
            </p>
          </div>
        </div>

        {/* Tally Form */}
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Join Us</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <TallyForm formId="mVDV7j" height="600px" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
