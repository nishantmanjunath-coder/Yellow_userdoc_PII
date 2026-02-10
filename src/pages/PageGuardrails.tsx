import { PageLayout } from "../components/PageLayout";
import { PageMeta } from "../components/PageMeta";
import { PageFAQ, FAQItem } from "../components/PageFAQ";
import { Italic } from "lucide-react";

const faqs: FAQItem[] = [
  {
    question: "Can I whitelist specific terms?",
    answer:
      "Yes. In the Entity Configuration, use the Exclusions list to prevent false positives (e.g., if a product name like 'Galaxy S23' is mistakenly flagged as a Person's Name).",
  },
  {
    question: "Does this work on Voice channels?",
    answer:
      "Absolutely. If PII is identified in the speech-to-text transcript, the system prevents the audio file from being stored, reducing your compliance footprint.",
  },
  {
    question: "What happens if I send a masked variable to an API?",
    answer:
      "By default, the API receives the masked value (****). To send the raw value to a trusted internal system, you must use a Secure API Node which is authorized to decrypt the session-scoped token.",
  },
  {
    question: "Is data sent to the PII detection service stored?",
    answer:
      "No. The detection service is stateless. It processes the text stream, returns the masked version/tags, and immediately discards the original data.",
  },
];

export default function PageGuardrails() {
  return (
    // <PageLayout>
      <article className="max-w-6xl mx-auto px-6 lg:px-12 pb-20">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 mt-20">
            Sensitive Data Guardrails (PII Protection)
        </h1>

        <PageMeta
            category="Security"
            readTime="6 min read"
            updatedDate="February 2026"
        />

        {/* INTRO */}
        <p className="text-base leading-7 my-6">
            In an era of stringent data privacy regulations (GDPR, HIPAA, PCI-DSS) and Generative AI, protecting customer data is no longer optional—it is critical.
        </p>

        <p className="text-base leading-7 my-6">
            Sensitive Data Guardrails is an enterprise-grade security layer that proactively scans every user interaction in real-time. It acts as a shield between your users and your systems, ensuring that Personally Identifiable Information (PII) and Protected Health Information (PHI) are detected, redacted, or masked before they reach your databases, logs, or third-party LLMs.
        </p>

        {/* CALLOUT BOX */}
        <div className="border-l-4 border-[#FFFF00]/60 bg-[#FFFF00]/10 px-6 py-4 my-10 rounded-r-xl">
            <p className="m-0">
            <strong>Security by Default:</strong> Sensitive data is intercepted at the source, ensuring no unmasked PII ever enters your logs.
            </p>
        </div>

        {/* WHY USE */}
        <h2 className="text-2xl font-semibold mt-16 mb-6 pb-2 border-b">
            Why use Sensitive Data Guardrails?
        </h2>

        <ul className="my-6 pl-5 list-disc space-y-2">
            <li><strong>Zero-Compromise Security:</strong> Achieve "Security by Default." Sensitive data is intercepted at the source, ensuring no unmasked PII ever enters your logs.</li>
            <li><strong>LLM Safety:</strong> Safely leverage the power of Generative AI. We automatically sanitize inputs so you never accidentally train public models on your private customer data.</li>
            <li><strong>Strict Governance:</strong> Enforce global policies that cannot be bypassed by individual developers, ensuring consistent compliance across all your bots.</li>
            <li><strong>Voice Compliance:</strong> Automatically prevent the storage of voice recordings if sensitive entities are detected in the transcript.</li>
        </ul>

        {/* KEY CAPABILITIES */}
        <h2 className="text-2xl font-semibold mt-16 mb-6 pb-2 border-b">
            Key Capabilities
        </h2>

        <div className="bg-gray-50 border rounded-xl p-6 my-6">
            <ul className="list-disc space-y-2 pl-4">
            <li><strong>Active Detection:</strong> Scans 100% of incoming messages in real-time using advanced NLP (Amazon Comprehend).</li>
            <li><strong>Global Enforcement:</strong> Policies set by Admins are the "Single Source of Truth." A developer cannot override a global mask settings.</li>
            <li><strong>Fail-Closed Design:</strong> If the PII detection service encounters an error, the system automatically blocks the message to prevent data leakage.</li>
            <li><strong>Custom Entities:</strong> Beyond standard PII (Name, Email), define your own regex patterns for Order IDs, Policy Numbers, or Tracking Codes.</li>
            <li><strong>Visual Trust Indicators:</strong> Developers see clear "Green Shield" icons in the Studio, confirming that a variable is protected by global policies.</li>
            <li><strong>Broad LLM Support:</strong> Seamlessly integrates with major providers including Azure OpenAI, Anthropic, and Google, ensuring compliance regardless of your underlying AI model.</li>
            </ul>
        </div>

        {/* HOW IT WORKS */}
        <h2 className="text-2xl font-semibold mt-16 mb-6 pb-2 border-b">
            How It Works
        </h2>

        <p className="my-6">
            The guardrails operate on a strict <strong>Global vs. Local </strong>hierarchy to balance security with functionality.
        </p>

        <h3 className="text-xl font-semibold mt-8">
            1. The Global Safety Net (Admin Controlled)
        </h3>

        <div className="rounded-2xl overflow-hidden my-8 shadow-elevated">
            <img
            src="/Island design.png"
            className="w-full h-full object-cover"
            />
        </div>

        <p className="my-6">
            This is your baseline defense. Policies defined here apply to <strong>every</strong> interaction.
        </p>

        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Action:</strong> If you set "Email" to Mask globally, every email address detected in any conversation is immediately obfuscated (e.g., j***@example.com).</li>
            <li><strong>Immutability:</strong> Developers can read these variables, but they cannot unmask them or change the protection level.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">
            2. Secure Collection (Developer Controlled)
        </h3>

        <p className="my-6">
            When a bot flow must collect sensitive data (e.g., verification steps), developers use specific Secure Input Nodes.
        </p>

        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Action:</strong> Data is captured, encrypted, and stored temporarily for the session duration.</li>
            <li><strong>Access:</strong> The raw value is available only to the secure API execution layer. Logs and debugging tools continue to see only the masked version.</li>
        </ul>

        {/* ARCHITECTURE & DATA FLOW */}
        <h2 className="text-2xl font-semibold mt-16 mb-6 pb-2 border-b">
            Architecture & Data Flow
        </h2>

        <p className="my-6">
            Understanding how data moves through the system is critical for security compliance. The following diagram illustrates the lifecycle of a message containing sensitive data (PII).
        </p>

        <div className="my-10 flex justify-center bg-gray-50 p-4">
            <img
            src="/architecture_diagram.png"
            alt="Architecture & Data Flow Diagram"
            className="max-w-6xl w-full h-auto object-contain rounded-2xl shadow-lg"
            />
        </div>

        <h3 className="text-xl font-semibold mt-8">
            Flow Breakdown
        </h3>

        <ul className="list-disc pl-5 space-y-2 my-6">
            <li><strong>Ingestion:</strong> The user sends a message containing sensitive data (e.g., SSN, Email).</li>
            <li><strong>Interception:</strong> Before any processing logic occurs, the Platform sends the raw text to the PII Detection Service.</li>
            <li><strong>Redaction:</strong> The service identifies entities based on Admin policies and returns a sanitized version (e.g., [SSN-REDACTED]).</li>
            <li><strong>Inference:</strong> The Platform sends only the redacted message to the Third-Party LLM. The external AI provider never receives the raw PII.</li>
            <li><strong>Storage:</strong> Finally, the conversation is logged in the database using the redacted/masked content, ensuring long-term compliance (GDPR/audit trails).</li>
        </ul>

        {/* CONFIG GUIDE */}
        <h2 className="text-2xl font-semibold mt-16 mb-6 pb-2 border-b">
            Configuration Guide (For Admins)
        </h2>

        <p className="italic">Prerequisite: Super Admin access is required to modify security policies.</p>

        <h3 className="text-lg font-semibold mt-8 mb-2">Step 1: Access the Dashboard</h3>
        <ul className="list-decimal pl-5 space-y-2">
            <li>Click on the Settings button on the right panel to open your platform controls.</li>
            <li>Under the General section, locate the Sensitive Data handling card. (Description: "Detect and de-identify sensitive PII/PHI information with methods like masking/replacement...")</li>
            <div className="rounded-2xl overflow-hidden my-8 shadow-elevated">
                <img
                src="/Settings - Phase 98.png"
                className="w-full h-full object-cover"
                />
            </div>
            <li>Click the card and toggle the Master Switch to ON.Note: Disabling this turns off detection for the entire bot. Proceed with caution.</li>
            <div className="rounded-2xl overflow-hidden my-8 shadow-elevated">
                <img
                src="/step 1.jpeg"
                className="w-full h-full object-cover"
                />
            </div>
        </ul>  

        <h3 className="text-lg font-semibold mt-8 mb-2">Step 2: Unlock Protected Entities (PII & PCI)</h3>

        <p>Once the Master Switch is enabled, the system automatically activates protection capabilities for key sensitive data types. These entities immediately become eligible for masking and appear in the developer's "Get Input" panel for secure use.</p>

        <h4 className="text-md font-medium mt-8 mb-2">Supported PII (Personally Identifiable Information):</h4>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Contact: </strong>Name, Phone, Email.</li>
            <li><strong>Identification: </strong>PAN Card, Aadhaar Card, Social Security Number (SSN).</li>
        </ul>

        <h4 className="text-md font-medium mt-8 mb-2">Supported PCI (Payment Card Industry):</h4>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Financial: </strong>Card Information (Credit/Debit card details).</li>
        </ul>

        <div className="italic my-4">By enabling these here, you ensure that anytime a developer selects "Aadhaar Card" or "Phone" in a bot flow, your security policies are automatically enforced.</div>

        <div className="my-10 flex flex-col sm:flex-row justify-center items-center gap-6">
  
            <div className="rounded-2xl overflow-hidden px-8 bg-white">
                <img
                src="/island design 2.jpeg"
                className="max-h-[950px] object-contain rounded-xl"
                />
            </div>

            <div className="rounded-2xl overflow-hidden px-8 bg-white">
                <img
                src="/Default (1).png"
                className="max-h-[650px] object-contain rounded-xl"
                />
            </div>

        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Step 3: Define Custom Regex Patterns</h3>

        <p>Do you use specific formats like ORDER-1234 or POL-999?</p>
        <ul className="list-decimal pl-5 space-y-2 py-4">
            <li>Click + <strong>Add Custom Entity.</strong></li>
            <li><strong>Category: </strong>Select Regex.</li>
            <li><strong>Sensitive data handling method: </strong>Mask </li>
            <li><strong>Pattern: </strong>Enter your regex (e.g., ^[A-Z]{3}-\d{4}$).</li>      

            <div className="rounded-2xl overflow-hidden my-8 shadow-elevated flex justify-center items-center">
                <img
                    src="/Default.png"
                    className="h-full max-w-sm h-auto object-contain"
                />
            </div>   

            <p>✨ <strong>Pro Tip: Zero-Code Regex Generation</strong></p>
            <p>Struggling with complex regex patterns? Let our built-in AI assistant do the heavy lifting.</p>
            <p>Click the Ask AI button to open the smart generator. You can simply:</p>
            <ul className="list-disc pl-5 space-y-2 py-4">
                <li><strong>Describe the format: </strong>"3 letters + 4 digits"</li>
                <li><strong>Give an example: </strong>"ABC-1234"</li>
            </ul>    

            <p>Hit Generate Regex, and the system will instantly convert your plain English into precise code. No technical expertise required!</p>

            <div className="rounded-2xl overflow-hidden my-4 shadow-elevated flex justify-center items-center">
                <img
                src="/Ask AI.png"
                className="w-full max-w-md h-auto object-contain rounded-2xl"
                />
            </div>

            <li><strong>Test It: </strong>Use the Preview tool to type a sample message. Verify that the system correctly masks the data before saving.</li>

            <div className="rounded-2xl overflow-hidden my-4 shadow-elevated flex justify-center items-center">
                <img
                src="/test_it.jpeg"
                className="w-full max-w-sm h-auto object-contain rounded-2xl"
                />
            </div>
        </ul>

        {/* DEV GUIDE */}
        <h2 className="text-2xl font-semibold mt-16 mb-6 pb-2 border-b">
        Developer Guide: Building Secure Flows
        </h2>

        {/* GOAL CALLOUT */}
        <div className="italic">
            <strong>Goal: </strong>Build functional bots without compromising security compliance.
        </div>

        <p className="my-6 leading-7">
        As a developer, the platform makes security transparent. You don't need to write complex code to hide data; you simply consume the secure variables.
        </p>

        <h3 className="text-lg font-semibold mt-10 mb-2">Permission & Visibility Logic</h3>

        <p className="my-4 leading-7">
        The "Get Input" panel behaves differently depending on the Admin's Global Policy. This ensures that critical security rules are always enforced while still giving developers flexibility where allowed.
        </p>

        <h4 className="text-md font-normal mt-8 mb-2"><strong>Scenario 1: Strict Enforcement (Global Policy Active)</strong> When the Admin has enabled the Global Toggle AND explicitly enabled a specific entity (like Name, Phone, or Email), the "Enable Sensitive Data Handling" checkbox will be checked and locked.</h4>
        <ul className="list-disc pl-5 space-y-2 my-2">
        <li><strong>What this means: </strong>The system forces protection because the Admin has deemed this data sensitive globally. You cannot uncheck this box.</li>
        </ul>
        <div className="rounded-2xl overflow-hidden my-4 shadow-elevated flex justify-center items-center">
            <img
            src="/Get card input.png"
            className="w-full max-w-xs h-auto object-contain rounded-2xl"
            />
        </div>

        <h4 className="text-md font-normal mt-8 mb-2"><strong>Scenario 2: Developer Choice (Optional Protection)</strong> When the Global Toggle is ON, but the specific entity is disabled in the Admin settings, the checkbox will appear unchecked and unlocked.</h4>
        <ul className="list-disc pl-5 space-y-2 my-2">
        <li><strong>What this means: </strong>You have the choice. You can manually check the box to enable protection for this specific node if you believe the data needs security, even if it's not mandated globally.</li>
        </ul>
        <div className="rounded-2xl overflow-hidden my-4 shadow-elevated flex justify-center items-center">
            <img
            src="/Get custom input (1).png"
            className="w-full max-w-xs h-auto object-contain rounded-2xl"
            />
        </div>

        <h4 className="text-md font-normal mt-8 mb-2"><strong>Scenario 3: Feature Inactive (Global Policy Off)</strong> When the Admin has disabled the Master Switch entirely, the checkbox will not appear.</h4>
        <ul className="list-disc pl-5 space-y-2 my-2">
        <li><strong>What this means: </strong>PII protection is not active for this bot.</li>
        </ul>
        <div className="rounded-2xl overflow-hidden my-4 shadow-elevated flex justify-center items-center">
            <img
            src="/Get custom input (3).png"
            className="w-full max-w-xs h-auto object-contain rounded-2xl"
            />
        </div>

        <div className="border-l-4 border-[#FFFF00]/60 bg-[#FFFF00]/10 px-6 py-4 my-10 rounded-r-xl">
            <p className="m-0">
            <strong>Pro Tip: </strong>If a checkbox is greyed out and checked, it means an Admin policy is protecting you from accidentally leaking sensitive data.
            </p>
        </div>       

        <h3 className="text-lg font-semibold mt-10 mb-2">
        Collecting Sensitive Info (e.g., OTPs, IDs)
        </h3>

        <p className="my-4 leading-7">
        Never use a standard "Text Input" node for sensitive data. Instead:
        </p>

        <ul className="list-decimal pl-5 space-y-2 my-6">
        <li>Add a Get Input node.</li>
        <li>Select the specific type from the menu (e.g., Phone, PAN card, or Card information).</li>
        <li>In Additional Settings, check Enable Sensitive Data Handling.
            <ul className="list-disc pl-5 space-y-2">
                <li><em>System Message: </em>"This input follows admin protection configurations. Data is stored securely and deleted after the session."</li>
                <li><em>Privacy Action: </em>You will see a read-only field labeled Privacy Action (e.g., "Masking"). This confirms exactly how the data will be treated upon capture.</li>
            </ul>
        </li>
        <li>Map it to a variable. The platform handles the encryption automatically.</li>
        </ul>

        <div className="border-l-4 border-[#FFFF00]/60 bg-[#FFFF00]/10 px-6 py-4 my-10 rounded-r-xl">
            <p className="m-0">
            <strong>Warning: </strong>Never attempt to bypass masking by splitting data across multiple variables. The active detection layer scans the final output string and will re-mask any reconstructed PII.
            </p>
        </div>

        <h3 className="text-lg font-semibold mt-10 mb-2">
        Handling Custom Entities (e.g., Order IDs, Tracking Codes)
        </h3>

        <p className="my-4 leading-7">
        Sometimes you need to collect organization-specific data that isn't a standard PII (like a Name or Phone). This is where Custom Entities come in.
        </p>

        <p className="my-4 leading-7">
        <strong>Prerequisite: </strong>Your Admin must first define and enable the Custom Entity (e.g., "Order ID") in the Admin Dashboard.
        </p>

        <p>How to configure:</p>

        <ul className="list-decimal pl-5 space-y-2 my-6">
        <li>Add a Get Input node and select Custom from the input type menu.</li>
        <li>Define your Input Name (variable) and select the Data Type (e.g., String, Number).</li>
        <li>Check the box: Enable Sensitive Data Handling.</li>
        <li>A new Entity Dropdown will appear. This list is populated directly from the Admin Dashboard.</li>
        <li>Select the specific custom entity (e.g., "Order ID") you want to map to this variable.
            <ul className="list-disc pl-5 space-y-2">
                <li><em>System Message: </em>The system will now apply the specific regex and protection rules defined by the Admin for this entity.</li>
            </ul>
        </li>
        </ul>
        <div className="rounded-2xl overflow-hidden my-8 shadow-elevated flex justify-center items-center">
            <img
                src="/Get custom input (2).png"
                className="h-full max-w-sm h-auto object-contain"
            />
        </div> 

        {/* COMPLIANCE */}
        <h2 className="text-2xl font-semibold mt-16 mb-6 pb-2 border-b">
        Compliance & Analytics
        </h2>

        <h3 className="text-lg font-semibold mt-10 mb-2">Compliance Standards</h3>

        <p className="text-base leading-7 my-6">
        This feature supports compliance with:
        </p>

        <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-6 my-6">
        <ul className="list-disc pl-5 space-y-2">
            <li>
            <strong>GDPR:</strong> Right to be forgotten (Session-based storage).
            </li>
            <li>
            <strong>PCI-DSS:</strong> Masking of credit card information in logs.
            </li>
        </ul>
        </div>

        {/* FAQ */}
        <PageFAQ faqs={faqs} />

</article>

    //   </div>
    // </PageLayout>
  );
}
