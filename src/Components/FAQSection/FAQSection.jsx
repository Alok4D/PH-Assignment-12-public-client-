import { useState } from "react";


const FAQSection = () => {

const dataArr = [
  {
    title: 'How can I book an apartment?',
    description: 'You can browse the available apartments on our portal and submit an agreement request for the apartment you like. Each apartment listing includes detailed information such as floor plan, rent, amenities, and availability. Once you submit a request, the management team will review it and contact you with confirmation and next steps. Make sure to check the apartment’s availability and lease terms before submitting your request.'
  },
  {
    title: 'What documents are required for an agreement?',
    description: 'To complete an agreement, you will need a valid government-issued ID, proof of income such as salary slips or bank statements, and current contact information. Depending on the apartment, additional documents may be requested such as references, previous rental agreements, or guarantor information. Providing accurate and complete documents ensures faster processing and approval of your agreement request.'
  },
  {
    title: 'Can I cancel or modify my agreement request?',
    description: 'Yes, pending agreement requests can be canceled or modified through your account dashboard before the agreement is finalized. You can update personal information, change the apartment selection, or withdraw the request entirely. Keep in mind that once an agreement is finalized and approved, cancellations or modifications may be subject to the building’s policies and fees.'
  },
  {
    title: 'Is there a maintenance service for apartments?',
    description: 'All apartments have access to 24/7 maintenance services to address issues such as plumbing, electrical, heating/cooling, and general repairs. You can submit maintenance requests directly through your account, providing details and urgency level for the issue. The maintenance team will prioritize requests and contact you with an estimated resolution time. Emergency requests are handled immediately to ensure resident safety.'
  },
  {
    title: 'Are there any fees apart from rent?',
    description: 'Apart from the monthly rent, some apartments may require additional fees such as service charges, security deposits, utility payments, or parking fees. All applicable fees are clearly outlined in the apartment listing and during the agreement process. Understanding these costs beforehand ensures there are no surprises and helps you plan your monthly budget effectively.'
  },
  {
    title: 'Can I choose a specific floor or block?',
    description: 'Yes, you can select your preferred floor or block while browsing available apartments. Options are subject to availability at the time of booking. Higher floors may offer better views or quieter environments, while certain blocks may have specific amenities or layouts. It is recommended to review floor plans, available amenities, and any additional fees associated with specific floors or blocks before submitting your request.'
  },
  {
    title: 'How do I pay rent for the apartment?',
    description: 'Rent can be paid conveniently online through our portal using multiple payment methods such as credit/debit cards, bank transfers, or other supported digital payment platforms. Automatic recurring payments can also be set up to avoid late fees. Receipts and payment history are available in your account for transparency. Late payments may incur penalties according to the lease terms.'
  },
  {
    title: 'Are there any discounts for long-term tenants?',
    description: 'Yes, long-term tenants may qualify for special discounts and promotional offers. These may include reduced rent rates for yearly agreements, waived administrative fees, or priority access to premium apartments. Discounts and offers vary by building and apartment availability. It is recommended to contact the building management office or check the portal for the latest promotions available to long-term tenants.'
  }
];


     const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };

    return (
         <div className="container mx-auto cursor-pointer space-y-6 my-10">
            {dataArr.map((data, idx) => (
                <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                    {/* the index div  */}
                    <div className="flex size-16 select-none items-center justify-center rounded-md bg-zinc-700 text-2xl font-semibold text-white">
                        <span>0{idx + 1}</span>
                    </div>

                    <div className="relative h-[2px] w-10 bg-zinc-700">
                        <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-zinc-700 bg-white"></span>
                        <span className="h-1 w-10 bg-zinc-700"></span>
                        <span className={`absolute -right-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 ${isOpen === idx ? 'border-zinc-700 bg-white delay-100' : 'border-transparent'}`}></span>
                    </div>

                    {/* main accordion div  */}
                    <div className="text-center container mx-auto">
                        <div className="relative container mx-auto border-t-[12px] border-zinc-700 bg-sky-50 p-3 shadow-md">
                            <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-zinc-700"></span>
                            <h1 className="select-none text-lg text-zinc-700">{data.title}</h1>
                        </div>
                        <div className={`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                <div className="container mx-auto  bg-zinc-700 p-6 text-sm text-white">{data.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQSection;