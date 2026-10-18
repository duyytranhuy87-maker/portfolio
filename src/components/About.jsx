import { PORTFOLIO_DATA } from "../config";
import { BookOpen, Palette, Video, Share2, MousePointer2, PenTool } from "lucide-react";

export function About() {
    const { about, experience } = PORTFOLIO_DATA;

    const skillIcons = {
        "Storytelling": <BookOpen className="text-white" size={18} strokeWidth={2} />,
        "Color Grading": <Palette className="text-white" size={18} strokeWidth={2} />,
        "Motion Graphics": <Video className="text-white" size={18} strokeWidth={2} />,
        "Social Media Viral": <Share2 className="text-white" size={18} strokeWidth={2} />,
    };

    return (
        <section id="about" className="bg-[#f2f2f2] w-full min-h-[100svh] h-auto lg:h-[100svh] py-20 lg:py-0 overflow-hidden relative border-b-brutal flex items-center font-sans select-none">

            {/* Top UI Bar (Fake App Menu) */}
            <div className="absolute top-6 left-6 md:left-10 flex items-center gap-4 md:gap-6 z-50">
                <div className="flex gap-1">
                    <div className="w-5 h-5 bg-[#E25A27] rounded-sm"></div>
                    <div className="w-5 h-5 bg-[#E25A27] rounded-t-full"></div>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs font-bold text-[#333] uppercase">
                    <span className="bg-[#E25A27] text-white px-2 py-0.5">Yourself</span>
                    <span>Edit</span>
                    <span>Object</span>
                    <span>Type</span>
                </div>
            </div>

            <div className="w-full h-full flex flex-col lg:flex-row relative pt-8 lg:pt-14 pb-8 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-40">

                {/* --- LEFT COLUMN: CONTENT (56%) --- */}
                <div className="w-full lg:w-[56%] flex flex-col justify-start gap-4 xl:gap-6 z-10 relative lg:pr-6 xl:pr-10 py-2">

                    {/* Header: Name and Bio */}
                    <div className="flex flex-col items-start gap-1.5 w-full">
                        <h2 className="text-3xl sm:text-4xl xl:text-[3.25rem] 2xl:text-[3.75rem] font-display font-black text-[#333] leading-none tracking-tight m-0 whitespace-nowrap">
                            Trần Văn Dũng
                        </h2>
                        <p className="text-xs sm:text-sm xl:text-[14.5px] text-[#555] font-medium leading-relaxed max-w-2xl mt-0.5">
                            "{about.bio}"
                        </p>
                    </div>

                    {/* Creative field */}
                    <div>
                        <h3 className="text-lg sm:text-xl xl:text-2xl font-display font-black text-[#333] tracking-tight mb-2">Creative field</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
                            {about.skills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-lg bg-[#E25A27] flex items-center justify-center shrink-0">
                                        {skillIcons[skill] || <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                                    </div>
                                    <span className="text-sm xl:text-base font-bold text-[#333] tracking-tight">/{skill}/</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <h3 className="text-lg sm:text-xl xl:text-2xl font-display font-black text-[#333] tracking-tight mb-2">Experience</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 xl:gap-y-2.5 gap-x-6">
                            {experience.map((exp, index) => (
                                <div key={index} className="flex items-start gap-2.5">
                                    <span className="font-bold text-[#333] text-xs xl:text-sm whitespace-nowrap w-[120px] xl:w-[135px] shrink-0">{exp.year}</span>
                                    <span className="text-[#ccc] font-bold text-xs xl:text-sm shrink-0">|</span>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[#333] text-xs xl:text-sm leading-snug">{exp.role}</span>
                                        <span className="text-[#777] font-medium text-[11px] xl:text-xs mt-0.5 leading-tight">{exp.company}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Software */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 xl:gap-5">
                        <h3 className="text-lg sm:text-xl xl:text-2xl font-display font-black text-[#333] tracking-tight leading-none whitespace-nowrap">Software</h3>
                        <div className="flex flex-wrap gap-2 items-center">
                            {about.tools.map((tool) => (
                                <div
                                    key={tool.name}
                                    className={`w-8 h-8 xl:w-10 xl:h-10 rounded-lg flex items-center justify-center font-black text-xs xl:text-base shadow-sm ${tool.name === 'Capcut' ? 'bg-white p-1' : ''}`}
                                    style={tool.name !== 'Capcut' ? { color: tool.color, backgroundColor: tool.bg } : {}}
                                >
                                    {tool.name === 'Capcut' ? (
                                        <img src="/photo/capcut.svg" alt="Capcut" className="w-full h-full object-contain" />
                                    ) : tool.name}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* --- RIGHT COLUMN: IMAGE & UI ELEMENTS (44%) --- */}
                <div className="w-full h-[400px] lg:h-full lg:w-[44%] xl:w-[36%] relative z-0 mt-12 lg:mt-0">

                    {/* Bounding Box behind image */}
                    <div className="absolute top-[10%] lg:top-[10%] bottom-[5%] lg:bottom-[5%] left-[5%] right-[5%] lg:right-0 lg:left-[15%] border-[1px] border-[#E25A27] pointer-events-none z-10 opacity-70">
                        {/* Anchor points */}
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#E25A27]"></div>
                        <div className="absolute -top-1 left-1/2 w-2 h-2 bg-white border border-[#E25A27] -translate-x-1/2"></div>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#E25A27]"></div>
                        <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white border border-[#E25A27] -translate-y-1/2"></div>
                        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white border border-[#E25A27] -translate-y-1/2"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#E25A27]"></div>
                        <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white border border-[#E25A27] -translate-x-1/2"></div>
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#E25A27]"></div>
                    </div>

                    {/* Toolbar (Left side) */}
                    <div className="hidden lg:flex absolute top-[15%] left-[5%] w-8 bg-[#333] rounded-sm py-2 px-1 z-30 flex-col items-center gap-2 shadow-lg">
                        <div className="w-4 h-4 bg-[#E25A27] rounded-sm mb-1"></div>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-4 h-4 opacity-50 flex justify-center items-center">
                                <div className="w-3 h-3 border-2 border-white rounded-sm"></div>
                            </div>
                        ))}
                    </div>

                    {/* Layers Panel (Top Right) */}
                    <div className="hidden lg:block absolute top-[8%] -right-8 w-28 bg-[#444] rounded-sm z-30 shadow-lg border border-[#333] overflow-hidden">
                        <div className="bg-[#333] text-gray-400 text-[10px] px-2 py-1 font-bold flex justify-between items-center">
                            Layer <span>≡</span>
                        </div>
                        <div className="p-1 text-[8px] text-white flex flex-col gap-0.5">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="flex items-center gap-1 bg-[#555] px-1 py-0.5 rounded-sm">
                                    <div className="w-2 h-2 bg-gray-400"></div>
                                    <span>&lt;Path&gt;</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pen Tool Path */}
                    <svg className="hidden xl:block absolute top-[40%] left-[0%] w-[45%] h-[28%] z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 0 0 C 40 10, 60 50, 80 100" fill="none" stroke="#E25A27" strokeWidth="1" />
                        <rect x="-2" y="-2" width="4" height="4" fill="white" stroke="#E25A27" strokeWidth="1" />
                        <rect x="38" y="25" width="4" height="4" fill="white" stroke="#E25A27" strokeWidth="1" />
                        <rect x="78" y="98" width="4" height="4" fill="white" stroke="#E25A27" strokeWidth="1" />
                    </svg>

                    {/* Pen Tool Icon */}
                    <div className="hidden xl:block absolute top-[36%] left-[2%] z-20 -rotate-45">
                        <PenTool size={30} className="text-[#222] fill-[#222]" />
                    </div>

                    {/* Cursor Icon */}
                    <div className="hidden lg:block absolute top-[45%] -right-12 z-40 -rotate-12">
                        <MousePointer2 size={40} className="text-[#222] fill-white" />
                    </div>

                    {/* Right side orange icons block */}
                    <div className="hidden lg:flex absolute bottom-[20%] -right-6 flex-col gap-1 z-30">
                        <div className="flex gap-1">
                            <div className="w-8 h-8 bg-[#E25A27] rounded-sm"></div>
                            <div className="w-8 h-8 bg-[#E25A27] rounded-sm"></div>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-8 h-8 bg-[#E25A27] rounded-sm"></div>
                            <div className="w-8 h-8 bg-[#E25A27] rounded-sm"></div>
                        </div>
                    </div>

                    {/* Main Image */}
                    <img
                        src="/photo/tach-nen.png"
                        alt="Trần Văn Dũng"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[5%] w-auto h-full lg:h-[105%] object-contain object-bottom drop-shadow-2xl z-20"
                    />

                </div>
            </div>
        </section>
    );
}
