"use client";

import React, { useState } from "react";

const HowToUse = () => {
    const [activeTab, setActiveTab] = useState("GTM Enablement");

    const renderContent = () => {
        switch (activeTab) {
            case "GTM Enablement":
                return (
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold">
                            GTM Enablement
                        </h3>
                        <ul className="list-disc list-inside mt-2">
                            <li>
                                Upload your custom content, best practices,
                                methodology
                            </li>
                            <li>
                                Ramp and certify reps with near-realistic
                                roleplays
                            </li>
                            <li>
                                Quantify performance, export reports, and track
                                progress over time
                            </li>
                        </ul>
                    </div>
                );
            case "Learning & Development":
                return (
                    <div className="mt-4">
                        Content for Learning & Development
                    </div>
                );
            case "Partner Enablement":
                return (
                    <div className="mt-4">Content for Partner Enablement</div>
                );
            case "Corporate Communications":
                return (
                    <div className="mt-4">
                        Content for Corporate Communications
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text- font-bold">How will you use Yoodli?</h2>
            <div className="flex space-x-4 mt-4">
                {[
                    "GTM Enablement",
                    "Learning & Development",
                    "Partner Enablement",
                    "Corporate Communications",
                ].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                            activeTab === tab
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            {renderContent()}
        </div>
    );
};

export default HowToUse;
