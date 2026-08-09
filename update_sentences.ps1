
$file = "C:\Users\kalhe\Documents\antigravity\hopeful-pythagoras\lingua\data.js"
$content = Get-Content $file -Raw -Encoding UTF8

$newSentences = @'
const SENTENCES = {
  professional:[
    {en:"I would like to draw your attention to a critical issue that requires immediate and decisive action on your part.",use:"Formal meeting / email",am:"ወዲያው እርምጃ ለሚጠይቅ አስፈላጊ ጉዳይ ትኩረትዎን እንዲሰጡ ፈለኩ።"},
    {en:"Could you please elaborate on what you mean by that? I want to make sure I fully understand your position before responding.",use:"Asking for clarification",am:"ምን ማለትዎ እንደሆነ ሊያብራሩልኝ ይችሉ ይሆን? ምላሽ ከመስጠቴ በፊት አቋምዎን ሙሉ በሙሉ ለመረዳት እፈልጋለሁ።"},
    {en:"With all due respect, I believe there is a more effective approach we should consider before committing to this direction.",use:"Politely disagreeing",am:"ሙሉ ለሙሉ ሳላከብርዎ ሳይሆን፣ ወደዚህ አቅጣጫ ከመሄዳችን በፊት ሊታሰብበት የሚገባ የተሻለ መንገድ እንዳለ አምናለሁ።"},
    {en:"I appreciate the feedback and will take it into careful consideration when revising my approach going forward.",use:"Receiving criticism",am:"ግብረ-ምላሹን አደንቃለሁ፤ ወደፊት አቀራረቤን ሳሻሻል በጥንቃቄ ከግምት ውስጥ አስገባዋለሁ።"},
    {en:"To summarize the key takeaways from today's discussion, we have agreed on three primary action points.",use:"Concluding a meeting",am:"ዛሬ ከተወያየነው ዋና ዋና ነጥቦችን ለማጠቃለል፣ በሦስት ዋና ዋና የትግበራ ነጥቦች ላይ ተስማምተናል።"},
    {en:"I am writing to formally express my interest in the position and to highlight why I believe I would be an exceptional fit.",use:"Job application",am:"ለቦታው ያለኝን ፍላጎት በይፋ ለመግለጽ እና ለምን ልዩ ተስማሚ እንደሆንኩ ለማሳየት እጽፋለሁ።"},
    {en:"Thank you for your prompt response — I look forward to discussing this further at your earliest convenience.",use:"Professional email",am:"ፈጣን ምላሽዎ አድናቆቴን ቀሰቀሰ — ለቀጣይ ምቹ ጊዜዎ ይህን ለተጨማሪ ንግግር እጠባበቃለሁ።"},
    {en:"I would be grateful if you could review the attached document and provide your feedback before Friday.",use:"Making a request",am:"አያያዙን ሰነድ ከዓርብ በፊት ቢፈትሹት እና አስተያየትዎን ቢሰጡኝ ደስ ይለኝ ነበር።"},
    {en:"I must apologize unreservedly for the inconvenience this delay has caused and assure you it will not happen again.",use:"Professional apology",am:"ይህ መዘግየት ላደረሰብዎ ቅር ሁናቴ ሳያዳግመኝ ይቅርታ እጠይቃለሁ፤ ዳግም እንደማይደገም አረጋግጥልዎታለሁ።"},
    {en:"After careful consideration of all the relevant factors, I am inclined to recommend the second option as the most viable.",use:"Making a recommendation",am:"ሁሉንም ተዛማጅ ሁኔታዎች በጥንቃቄ ካጤንኩ በኋላ፣ ሁለተኛውን አማራጭ እንደ ምርጥ አዋጭ ምርጫ ለመምከር ዝንባሌ አለኝ።"}
  ],
  academic:[
    {en:"There is compelling evidence to suggest that socioeconomic inequality has a far greater impact on educational outcomes than previously acknowledged.",use:"Academic argument",am:"ማህበረ-ኢኮኖሚያዊ አለመሳሌ ቀደም ሲል ከታወቀው በላይ በትምህርት ውጤቶች ላይ ጎልቶ ተጽዕኖ እንዳለው አሳማኝ ማስረጃ አለ።"},
    {en:"While this study presents significant findings, it is important to acknowledge several notable limitations in the methodology.",use:"Critical analysis",am:"ይህ ጥናት ጠቃሚ ግኝቶችን ቢያቀርብም፣ በዘዴዎሎጂው ውስጥ ያሉ ብዙ ሊስተዋሉ የሚገቡ ውሱናዎችን ማሳወቅ አስፈላጊ ነው።"},
    {en:"The data appears to indicate a strong correlation between early childhood intervention and long-term academic achievement.",use:"Discussing data",am:"ዳታው የሚጠቁመው ቀደምት የልጅነት ጊዜ ጣልቃ ገብነትና ረዥም ጊዜ የትምህርት ስኬት መካከል ጠንካራ ትስስር ሊኖር እንደሚችል ነው።"},
    {en:"This phenomenon can be largely attributed to the rapid proliferation of digital technology over the past two decades.",use:"Explaining causes",am:"ይህ ክስተት በዋናነት ባለፉት ሁለት አስርት ዓመታት ዲጂታል ቴክኖሎጂ ፈጠን ብሎ ለመስፋፋቱ ሊባል ይችላል።"},
    {en:"Contrary to the prevailing view, some researchers argue that the relationship is far more nuanced and complex.",use:"Presenting counterargument",am:"ወሳኙ አስተሳሰብ ተቃርኖ ሆኖ፣ አንዳንድ ተመራማሪዎች ግንኙነቱ እጅግ ዝርዝርና ውስብስብ እንደሆነ ይሟግታሉ።"},
    {en:"It is beyond the scope of this paper to examine all the contributing factors in detail, but the primary causes are as follows.",use:"Limiting scope",am:"ሁሉንም አስተዋጽኦ አድራጊ ሁኔታዎች በዝርዝር ማጥናት ከዚህ ጽሑፍ ወሰን ያለፈ ቢሆንም፣ ዋና ዋና ምክንያቶቹ እነዚህ ናቸው።"},
    {en:"A comprehensive review of the existing literature reveals a significant gap in current understanding that this study seeks to address.",use:"Introducing research",am:"ያለውን ሥነ-ጽሑፍ አጠቃላይ ፍተሻ ይህ ጥናት ሊሞላ ለሚፈልገው ትልቅ ክፍፍል በአሁኑ ግንዛቤ ውስጥ እንዳለ ያሳያል።"},
    {en:"The findings of this investigation have profound implications for policy makers working in the field of public health.",use:"Stating implications",am:"ይህ ምርምር ግኝቶቹ በሕዝባዊ ጤና ዘርፍ ለሚሰሩ ፖሊሲ አውጪዎች ጥልቅ ተዛምዶ አላቸው።"},
    {en:"In conclusion, the evidence overwhelmingly supports the hypothesis that consistent practice is the primary driver of language acquisition.",use:"Concluding argument",am:"በማጠቃለያ፣ ማስረጃዎቹ ወጥ ልምምድ የቋንቋ ግዥ ዋና አንቀሳቃሽ ነው የሚለውን ግምት አብዝቶ ይደግፋሉ።"},
    {en:"Future research should examine the long-term effects of this intervention across a more diverse and representative population.",use:"Research recommendations",am:"ወደፊት የሚደረጉ ምርምሮች ይህን ጣልቃ ገብነት ረዥም ጊዜ ተጽዕኖ ሰፊና ተወካይ በሆነ ሕዝብ ላይ ሊፈትሹ ይገባቸዋል።"}
  ],
  everyday:[
    {en:"I've been meaning to reach out for a while — how have you been keeping? I hope life has been treating you well.",use:"Reconnecting with someone",am:"ለጊዜ ሲሆን ልደርስህ/ሽ አስቤ ነበር — ምን ትለ/ሽ ይሆን? ሕይወት ደህና እንደምትስተናገደህ/ሽ ተስፋ አደርጋለሁ።"},
    {en:"I completely understand where you're coming from, but I see this situation quite differently for a few important reasons.",use:"Expressing disagreement respectfully",am:"ከምን ቦታ እንደምትነሳ/ሺ ሙሉ ለሙሉ እረዳለሁ፤ ነገር ግን ይህን ሁኔታ በጥቂት አስፈላጊ ምክንያቶች ሙሉ ለሙሉ ለያለ ሁኔታ አያለሁ።"},
    {en:"That's a really interesting perspective — I hadn't thought about it from that angle before. Could you expand on that?",use:"Showing interest",am:"ያ በጣም አስደሳች አስተሳሰብ ነው — ቀደም ሲል ከዚያ አቅጣጫ አስቤው አላውቅም ነበር። ሊያሰፉልኝ ይችሉ ይሆን?"},
    {en:"I don't want to make any assumptions, so could you help me understand what you actually meant by that comment?",use:"Seeking clarification",am:"ምንም ግምት ማድረግ አልፈልግም፤ ስለዚህ ያ አስተያየት ምን ማለት እንደሆነ ለመረዳት ልትረዳኝ ትችላለህ/ሽ?"},
    {en:"It's not that I don't trust your judgment, but I think it's worth exploring a few alternatives before we decide.",use:"Being cautiously diplomatic",am:"ፍርድህ/ሽን አላምን ማለቴ አይደለም፤ ነገር ግን ከወሰናችን በፊት ጥቂት አማራጮችን መዳሰስ ጠቃሚ ነው ብዬ አስባለሁ።"},
    {en:"I want to be completely honest with you because I think you deserve to hear the truth rather than what you want to hear.",use:"Candid conversation",am:"ሙሉ ለሙሉ ሐቀኛ ልሆናልህ/ሽ እፈልጋለሁ ምክንያቱም ልትሰሙ ከሚፈልጉት ይልቅ እውነቱን ለመስማት ይገባዎታል።"},
    {en:"Can we take a step back and look at the bigger picture? I think we might be getting caught up in minor details.",use:"Refocusing a conversation",am:"ወደ ኋላ ትንሽ ብንመለስና ትልቁን ምስል ብናይ? ትናንሽ ዝርዝሮች ውስጥ ተዘፍቀን ሊሆን ይችላል ብዬ አስባለሁ።"},
    {en:"I genuinely appreciate everything you have done — your support made an enormous difference at a very difficult time.",use:"Expressing deep gratitude",am:"ያደረጋህ/ሽ ሁሉ ነገር እውነተኛ ምስጋና ይቀርብህ/ሽ — ድጋፍህ/ሽ ፈጽሞ አስቸጋሪ ወቅት ላይ ትልቅ ልዩነት ፈጥሯል።"},
    {en:"I don't have all the answers right now, but I'm committed to figuring this out with you, step by step.",use:"Expressing solidarity",am:"አሁን ሁሉንም መልሶቹ የለኝም፤ ነገር ግን ይህን ከአንቱ ጋር ደረጃ በደረጃ ለማወቅ ቁርጠኛ ነኝ።"},
    {en:"Could we perhaps find a compromise that respects both of our needs rather than one side winning completely?",use:"Conflict resolution",am:"አንዱ ጎን ሙሉ ለሙሉ ከሚያሸንፍ ይልቅ ሁለታችንም ፍላጎት ሊያከብር የሚችል የጋራ መፍትሔ ልናገኝ እንችል ይሆን?"}
  ],
  expressing_ideas:[
    {en:"From my perspective, the fundamental issue is not what people do, but why they do it and what drives their choices.",use:"Sharing a philosophical view",am:"ከአስተሳሰቤ አንጻር፣ መሠረታዊ ጉዳዩ ሰዎች ምን እንደሚያደርጉ ሳይሆን ለምን እንደሚያደርጉት እና ምርጫቸውን ምን እንደሚያስነሳ ነው።"},
    {en:"What strikes me most about this situation is not the obvious challenge, but the extraordinary opportunity hidden within it.",use:"Reframing a problem",am:"በዚህ ሁኔታ ሁሉ ካሉ ነጥቦቹ ይበልጥ የሚወጠኝ ግልጽ ፈተናው ሳይሆን፣ ውስጡ የተደበቀው ያልተለመደ ዕድል ነው።"},
    {en:"I would argue that the long-term consequences of this decision are being severely underestimated by almost everyone involved.",use:"Introducing an argument",am:"ይህ ውሳኔ ረዥም ጊዜ ውጤቶቹ በሚሳተፉ ሰዎች ሁሉ ማለት ይቻላል እጅግ አናሳ ሆኖ እየቃኘ ነው ብዬ ልሟሟ እፈልጋለሁ።"},
    {en:"The irony is that the very qualities that make someone successful can, over time, become the obstacles that hold them back.",use:"Discussing paradox",am:"ምፀቱ፣ አንዱን ሰው ስኬታማ የሚያደርጉ ባህሪያቱ ከጊዜ ጋር ፊት-አሳፋሪ ሆነው ሊቀሩ ይችላሉ።"},
    {en:"We tend to overestimate how much others think about our mistakes and drastically underestimate how resilient we truly are.",use:"Psychological insight",am:"ሌሎች ስህተቶቻችንን ምን ያህል እንደሚያስቡ ከልክ ሺ ወደ ላይ እናስበዋለን፤ ምን ያህል ጽናት ያለን እንደሆን ግን ብዙ እናቀናቅናለን።"},
    {en:"The most dangerous assumption we can make is that the way things are is the way things have to be.",use:"Challenging assumptions",am:"ሊወሰደ ከሚቻለው ግምቶች ሁሉ ከፍ ያለ አደጋ ያለው፣ ነገሮቹ ያሉበት ሁኔታ ሁል ጊዜ መሆን ያለበት ሁኔታ ነው ማለቱ ነው።"},
    {en:"Growth, in my experience, almost always requires a period of genuine discomfort that most people prefer to avoid.",use:"Discussing personal growth",am:"ከልምዴ አንጻር፣ እድገት ሁልጊዜ ማለት ይቻላል አብዛኛዎቹ ሰዎች ለማስወገድ የሚፈልጉትን እውነተኛ ምቾት ማጣት ወቅት ይጠይቃል።"},
    {en:"The difference between people who achieve their goals and those who don't is rarely talent — it is almost always consistency.",use:"Motivational insight",am:"ግባቸውን ካሳኩ እና ካላሳኩ ሰዎች ልዩነቱ ብዙ ጊዜ ተሰጥኦ ሳይሆን ሁሌ ማለት ይቻላል ወጥነት ነው።"},
    {en:"If we are truly honest about the barriers to success, we must also be willing to honestly examine the role of privilege.",use:"Critical thinking",am:"ወደ ስኬት ያሉ እንቅፋቶች ሁሉ ሐቀኛ ከሆንን፣ ልዩ ጥቅሙን ሚና ሐቀኛ ሆኖ ለማጥናት ዝግጁ መሆን አለብን።"},
    {en:"Language shapes not just how we communicate, but how we perceive the world and the limits of our own understanding.",use:"Discussing language and thought",am:"ቋንቋ እንዴት እንደምንግባቦ ብቻ ሳይሆን ዓለሙን እንዴት እንደምናስተዋልና የፍልስፍናዊ ግንዛቤያችን ወሰን ያቀርፋል።"}
  ],
  emotional:[
    {en:"I know this is incredibly difficult right now, and I want you to know that you don't have to go through this alone.",use:"Offering emotional support",am:"አሁን ይህ ምን ያህል አስቸጋሪ እንደሆነ አውቃለሁ፤ ይህን ብቻህ/ሽ ማለፍ አለብህ/ሽ ብዬ አታስብ — ፈጽሞ አይደለም።"},
    {en:"I'm genuinely proud of how far you have come — the growth I have witnessed in you over the past year has been remarkable.",use:"Expressing pride",am:"እዚህ ድረስ ለደረስህ/ሽ ፍጹም ኩርፊያ ይሰማኛል — ባለፈው ዓመት በአንቱ ያስተዋልኩት ዕድገት ድንቅ ነበር።"},
    {en:"I think what you're feeling is completely valid, and it makes perfect sense given everything you have been through.",use:"Validating feelings",am:"የሚሰማህ/ሽ ስሜት ሙሉ ለሙሉ ትክክለኛ ነው ብዬ አስባለሁ፤ ያለፍህ/ሽበትን ሁሉ ካሰብን ፍጹም ምክንያት አለው።"},
    {en:"It takes an enormous amount of courage to be this honest about something so personal — thank you for trusting me.",use:"Acknowledging vulnerability",am:"ስለዚህ የቅርብ ጉዳይ ይህን ያህል ሐቀኛ ለመሆን ብዙ ድፍረት ያስፈልጋል — ስለ ተማምንህ/ሽ አመሰግናለሁ።"},
    {en:"I am incredibly grateful for the way you showed up for me during one of the hardest periods of my life.",use:"Expressing deep gratitude",am:"ሕይወቴ ከሚያስቸግሩ ወቅቶች አንዱ ሆነህ/ሽ ሳለ ስጋቢ ሁናቴ ልትጠቅምልኝ ደርሰህ/ሽ ለዚሁ ምስጋናዬ እጅግ ብዙ ነው።"},
    {en:"Even when I can't always show it, I want you to know how much your presence in my life means to me.",use:"Expressing love/care",am:"ሁሌም ላሳይ ባልችልም፣ ሕይወቴ ውስጥ መኖርህ/ሽ ምን ያህል ለኔ ትርጉም እንዳለው ልታውቅ/ቂ ፈለኩ።"},
    {en:"I want to apologize sincerely — not just for what I did, but for the impact it had on you, which I deeply regret.",use:"Sincere apology",am:"ሐቀኛ ይቅርታ መጠየቅ እፈልጋለሁ — ላደረኩት ብቻ ሳይሆን ለሆነብህ/ሽ ተጽዕኖ ጭምር — ይህን እጅግ ነው የማዝነው።"},
    {en:"This is a moment I have been working toward for years, and I want to take a second to genuinely acknowledge it.",use:"Celebrating achievement",am:"ይህ ለዓመታት ስሰራ የቆየሁበት ጊዜ ነው፤ ሙሉ ቅን ሆኖ ለዚሁ አምስ ሚዘን ልሳ ቁጭ ለማለት ፈለኩ።"},
    {en:"I'm struggling right now, and I think I need to ask for help instead of trying to handle everything on my own.",use:"Asking for help vulnerably",am:"አሁን እሰቃያለሁ፤ ሁሉን ብቻዬ ለመቆናጠጥ ከምሞክር ይልቅ እርዳታ መጠየቅ ያስፈልገኛል ብዬ አስባለሁ።"},
    {en:"The grief comes in waves, and some days are harder than others, but I am slowly finding my way back to myself.",use:"Describing grief",am:"ሐዘኑ በሞገዶች ሲደርስ፣ አንዳንድ ቀናት ሲሻሉ ናቸው፤ ነገር ግን ቀስ ቀስ ወደ ራሴ ሲናፈሰኝ ነው።"}
  ],
  advanced_phrases:[
    {en:"It would be premature to draw any definitive conclusions at this stage given the limited evidence currently available.",use:"Academic caution",am:"አሁን ያለው ውስን ማስረጃ ከቃኘን፣ በዚህ ደረጃ ቀደምት ወሳኝ መደምደሚያ ማምጣት ቅደምቅን ይሆናል።"},
    {en:"The extent to which social media has influenced political discourse is a matter of significant and ongoing scholarly debate.",use:"Academic hedging",am:"ማህበራዊ ሚዲያ ፖለቲካዊ ንግግሩን ምን ያህል እንደጎዳ ጉዳይ ጉልህ እና ቀጣይ የምሁራን ክርክር ነው።"},
    {en:"Far from being a simple problem with an easy solution, this challenge requires a multifaceted and coordinated response.",use:"Acknowledging complexity",am:"ቀላል መፍትሔ ካለው ቀላል ችግር ይልቅ፣ ይህ ፈተና ብዙ ገጽታ ያለውና ቀናጅ ምላሽ ይጠይቃል።"},
    {en:"What is particularly noteworthy about this case is the degree to which it deviates from the established pattern.",use:"Academic observation",am:"ከዚህ ጉዳይ ሁሉ ትኩረት ሊሰጠው ልዩ የሆነው ያቋቋሙትን ዘይቤ ምን ያህል እንደሚጣስ ደረጃ ነው።"},
    {en:"The implications of this finding extend well beyond the immediate context and have broader significance for the field.",use:"Stating broader impact",am:"ይህ ግኝት ተዛምዶዎቹ ወዲያ ቅርብ ዐውዱን ሸልፈው ወደ ሌላ ዘልቀው ይሄዳሉ፤ ለዘርፉ ሰፋ ያለ ጠቀሜታ አላቸው።"},
    {en:"It is worth noting that correlation does not imply causation — a distinction that is frequently overlooked in popular discourse.",use:"Critical thinking",am:"ትስስር ምክንያት አለ ማለት አይደለም — ይህ ልዩነት በሕዝባዊ ንግግር ብዙ ጊዜ ይዘለላል ብሎ ማስታወሻ ያሻዋል።"},
    {en:"This apparent paradox can be resolved if we consider the possibility that both propositions are partially correct.",use:"Resolving contradiction",am:"ሁለቱ ሐሳቦች ከፊልፊሉ ትክክለኛ ሊሆኑ ይችሉ ብሎ ካሰብን ይህ ግልጽ ተቃርኖ ሊፈታ ይችላል።"},
    {en:"The evidence, taken collectively, paints a picture that is more complex and less straightforward than initially anticipated.",use:"Synthesizing evidence",am:"ማስረጃዎቹ ሁሉ ከተሰሰቡ፣ መጀመሪያ ከተጠበቀው ይልቅ ውስብስብ እና ቀጥተኛ ያልሆነ ምስል ያሳያሉ።"},
    {en:"Notwithstanding these challenges, there is reason for cautious optimism regarding the long-term trajectory of the situation.",use:"Balanced conclusion",am:"እነዚህ ፈተናዎች ቢኖሩም፣ ሁኔታው ረዥም ጊዜ አቅጣጫ ላይ ጥንቃቄ ያለው ብሩህ ተስፋ ሊኖር ምክንያት አለ።"},
    {en:"The degree of change required cannot be understated — incremental reform will simply not be sufficient to address the scale of the problem.",use:"Emphasizing urgency",am:"የሚጠበቀው ለውጥ ደረጃ አናሳ ሊሆን አይችልም — ቀስ ቀስ የሚሄደው ማሻሻያ ለችግሩ ወሰን ምላሽ ሊሆን አይበቃም።"}
  ]
};
'@

# Find the SENTENCES block and replace it
$startIdx = $content.IndexOf("const SENTENCES = {")
# Find the closing }; after the SENTENCES block
$searchFrom = $startIdx + 20
$braceCount = 1
$i = $searchFrom
while ($i -lt $content.Length -and $braceCount -gt 0) {
    if ($content[$i] -eq '{') { $braceCount++ }
    elseif ($content[$i] -eq '}') { $braceCount-- }
    $i++
}
# now $i points right after the closing }
# find the ; after it
while ($i -lt $content.Length -and $content[$i] -ne ';') { $i++ }
$endIdx = $i + 1  # include the semicolon

$before = $content.Substring(0, $startIdx)
$after  = $content.Substring($endIdx)
$newContent = $before + $newSentences.TrimEnd() + $after

[System.IO.File]::WriteAllText($file, $newContent, [System.Text.Encoding]::UTF8)
Write-Host "Done! File updated successfully."
Write-Host "Before length: $($before.Length), After: $($after.Length)"
