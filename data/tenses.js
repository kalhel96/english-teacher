const GRAMMAR = [
  {
    id: 1,
    title: "Simple Present Tense",
    emoji: "⏰",
    badge: "Tense",
    explanation: "Used to describe habits, unchanging situations, general truths, and fixed arrangements. It shows actions that happen regularly or are permanently true.",
    explanationAm: "ይህ ጊዜ ልማዶችን፣ የማይለወጡ ሁኔታዎችን፣ አጠቃላይ እውነታዎችን እና ቋሚ ዝግጅቶችን ለመግለጽ ያገለግላል። በመደበኛነት የሚከሰቱ ወይም ሁልጊዜ እውነት የሆኑ ድርጊቶችን ያሳያል።",
    formula: "Subject + V1 (base form) / V1+s/es (he/she/it)",
    formulaAm: "ፋርሙላ: ተሳቢ + ግስ ሥር / ግስ+s/es (ለ 3ኛ መደብ ነጠላ)",
    signalWords: "always, usually, every day, sometimes, never, often, normally",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I go to school every day.", textAm: "በየቀኑ ትምህርት ቤት እሄዳለሁ።" },
      { label: "✅ Positive", type: "pos", text: "She works in a hospital.", textAm: "እሷ ሆስፒታል ውስጥ ትሰራለች።" },
      { label: "❌ Negative", type: "neg", text: "He does not like coffee.", textAm: "እሱ ቡና አይወድም።" },
      { label: "❌ Negative", type: "neg", text: "They do not play football.", textAm: "እነሱ እግር ኳስ አይጫወቱም።" },
      { label: "❓ Question", type: "q", text: "Do you speak English?", textAm: "እንግሊዝኛ ትናገራለህ/ሽ?" },
      { label: "📝 More Examples", type: "note", text: "The sun rises in the east. / Water boils at 100°C.", textAm: "ፀሐይ ከምስራቅ ትወጣለች። / ውሃ በ100°C ይፈላል።" }
    ]
  },
  {
    id: 2,
    title: "Present Continuous Tense",
    emoji: "⏳",
    badge: "Tense",
    explanation: "Used to describe actions happening right now at the moment of speaking, or temporary situations happening around now.",
    explanationAm: "አሁን በመካሄድ ላይ ያሉ ወይም እየተከናወኑ ያሉ ድርጊቶችን እና ጊዜያዊ ሁኔታዎችን ለመግለጽ ያገለግላል።",
    formula: "Subject + am/is/are + V-ing",
    formulaAm: "ፋርሙላ: ተሳቢ + am/is/are + ግስ-ing",
    signalWords: "now, right now, at the moment, currently, look, listen",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I am studying English now.", textAm: "አሁን እንግሊዝኛ እያጠናሁ ነው።" },
      { label: "✅ Positive", type: "pos", text: "They are playing in the garden.", textAm: "እነሱ አትክልት ስፍራ ውስጥ እየተጫወቱ ነው።" },
      { label: "❌ Negative", type: "neg", text: "She is not watching TV.", textAm: "እሷ ቴሌቪዥን እያየች አይደለም።" },
      { label: "❌ Negative", type: "neg", text: "We are not sleeping.", textAm: "እኛ እየተኛን አይደለም።" },
      { label: "❓ Question", type: "q", text: "Are you listening to me?", textAm: "እየሰማኸኝ/ሽ ነው?" },
      { label: "📝 More Examples", type: "note", text: "Look! It is raining. / He is working hard these days.", textAm: "እይ! ዝናብ እየዘነበ ነው። / እሱ በዚህ ቀናት ጠንክሮ እየሰራ ነው።" }
    ]
  },
  {
    id: 3,
    title: "Present Perfect Tense",
    emoji: "✅",
    badge: "Tense",
    explanation: "Used for actions that happened at an unspecified time in the past or actions that started in the past and continue to the present. Focus is on the result.",
    explanationAm: "ባለፈው ጊዜ የተከናወኑ ነገር ግን ውጤታቸው አሁን ድረስ የሚታይ ድርጊቶችን ወይም ባለፈው ተጀምረው አሁንም የሚቀጥሉ ነገሮችን ለመግለጽ ያገለግላል።",
    formula: "Subject + have/has + V3 (past participle)",
    formulaAm: "ፋርሙላ: ተሳቢ + have/has + V3 (ያለፈ ጊዜ ግስ)",
    signalWords: "already, yet, just, ever, never, recently, since, for",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I have finished my homework.", textAm: "የቤት ስራዬን ጨርሻለሁ።" },
      { label: "✅ Positive", type: "pos", text: "She has lived here for five years.", textAm: "እሷ እዚህ ለአምስት ዓመታት ኖራለች።" },
      { label: "❌ Negative", type: "neg", text: "They have not eaten lunch yet.", textAm: "እነሱ ገና ምሳ አልበሉም።" },
      { label: "❌ Negative", type: "neg", text: "He hasn't called me.", textAm: "እሱ አልደወለልኝም።" },
      { label: "❓ Question", type: "q", text: "Have you ever been to London?", textAm: "ለንደን ሄደህ/ሽ ታውቃለህ/ሽ?" },
      { label: "📝 More Examples", type: "note", text: "We have just arrived. / I have never seen that movie.", textAm: "ገና አሁን ደረስን። / ያንን ፊልም አይቼ አላውቅም።" }
    ]
  },
  {
    id: 4,
    title: "Present Perfect Continuous",
    emoji: "🔄",
    badge: "Tense",
    explanation: "Used to show that an action started in the past and has continued up to the present moment. Emphasis is on the duration or process of the action.",
    explanationAm: "ባለፈው ጊዜ ተጀምሮ እስከ አሁን ድረስ ያለማቋረጥ እየተከናወነ ያለን ድርጊት ለመግለጽ ያገለግላል። ትኩረቱ ድርጊቱ በወሰደው ጊዜ ላይ ነው።",
    formula: "Subject + have/has + been + V-ing",
    formulaAm: "ፋርሙላ: ተሳቢ + have/has + been + ግስ-ing",
    signalWords: "for, since, how long, lately, recently",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I have been waiting for two hours.", textAm: "ለሁለት ሰዓታት ስጠብቅ ነበር።" },
      { label: "✅ Positive", type: "pos", text: "She has been working here since 2020.", textAm: "እሷ እዚህ ከ2020 ጀምሮ እየሰራች ነው።" },
      { label: "❌ Negative", type: "neg", text: "We haven't been studying lately.", textAm: "በቅርቡ እያጠናን አልነበረም።" },
      { label: "❌ Negative", type: "neg", text: "He has not been feeling well.", textAm: "ጥሩ ስሜት እየተሰማው አልነበረም።" },
      { label: "❓ Question", type: "q", text: "How long have you been learning English?", textAm: "እንግሊዝኛ መማር ከጀመርክ/ሽ ምን ያህል ጊዜ ሆነክ/ሽ?" },
      { label: "📝 More Examples", type: "note", text: "It has been raining all day. / You have been reading that book for weeks.", textAm: "ቀኑን ሙሉ ዝናብ እየዘነበ ነው። / ያንን መጽሐፍ ለሳምንታት እያነበብከው ነው።" }
    ]
  },
  {
    id: 5,
    title: "Simple Past Tense",
    emoji: "🔙",
    badge: "Tense",
    explanation: "Used to talk about a completed action in a time before now. The time of the action is often specified.",
    explanationAm: "በአንድ በተወሰነ ባለፈ ጊዜ ተከናውኖ ያለቀን ድርጊት ለመግለጽ ያገለግላል። ብዙውን ጊዜ ድርጊቱ መቼ እንደተፈጸመ ይገለጻል።",
    formula: "Subject + V2 (past form)",
    formulaAm: "ፋርሙላ: ተሳቢ + V2 (የኃላفي ጊዜ ግስ)",
    signalWords: "yesterday, last week, ago, in 2010, the other day",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I went to the market yesterday.", textAm: "ትናንትና ወደ ገበያ ሄድኩ።" },
      { label: "✅ Positive", type: "pos", text: "She bought a new car last month.", textAm: "ባለፈው ወር አዲስ መኪና ገዛች።" },
      { label: "❌ Negative", type: "neg", text: "They did not come to the party.", textAm: "እነሱ ወደ ድግሱ አልመጡም።" },
      { label: "❌ Negative", type: "neg", text: "He didn't eat his breakfast.", textAm: "ቁርሱን አልበላም።" },
      { label: "❓ Question", type: "q", text: "Did you finish the report?", textAm: "ሪፖርቱን ጨረስክ/ሽ?" },
      { label: "📝 More Examples", type: "note", text: "We saw a great movie last night. / The train arrived at 8 PM.", textAm: "ትላንት ማታ ጥሩ ፊልም አየን። / ባቡሩ ከምሽቱ 2 ሰዓት ላይ ደረሰ።" }
    ]
  },
  {
    id: 6,
    title: "Past Continuous Tense",
    emoji: "🎬",
    badge: "Tense",
    explanation: "Used to describe a continuing action in the past, often when another action interrupted it.",
    explanationAm: "ባለፈው ጊዜ እየተከናወነ የነበረን ድርጊት ለመግለጽ ያገለግላል፤ በተለይም ሌላ ድርጊት ሲያቋርጠው።",
    formula: "Subject + was/were + V-ing",
    formulaAm: "ፋርሙላ: ተሳቢ + was/were + ግስ-ing",
    signalWords: "while, when, as, all morning, at 8 PM yesterday",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I was sleeping when the phone rang.", textAm: "ስልኩ ሲጠራ ተኝቼ ነበር።" },
      { label: "✅ Positive", type: "pos", text: "They were watching TV at 9 PM.", textAm: "ከምሽቱ 3 ሰዓት ላይ ቴሌቪዥን እያዩ ነበር።" },
      { label: "❌ Negative", type: "neg", text: "She was not feeling well yesterday.", textAm: "ትናንት ጥሩ ስሜት አልነበራትም።" },
      { label: "❌ Negative", type: "neg", text: "We weren't listening to him.", textAm: "እኛ እሱን እየሰማነው አልነበረም።" },
      { label: "❓ Question", type: "q", text: "What were you doing at that time?", textAm: "በዚያን ጊዜ ምን እየሰራህ/ሽ ነበር?" },
      { label: "📝 More Examples", type: "note", text: "It was raining while we were driving. / He was reading a book.", textAm: "እየነዳን ሳለ ዝናብ እየዘነበ ነበር። / እሱ መጽሐፍ እያነበበ ነበር።" }
    ]
  },
  {
    id: 7,
    title: "Past Perfect Tense",
    emoji: "⏮️",
    badge: "Tense",
    explanation: "Used to show that an action was completed before another action in the past.",
    explanationAm: "ባለፈው ጊዜ ከአንድ ሌላ ድርጊት በፊት ቀድሞ የተጠናቀቀን ድርጊት ለመግለጽ ያገለግላል።",
    formula: "Subject + had + V3 (past participle)",
    formulaAm: "ፋርሙላ: ተሳቢ + had + V3 (ያለፈ ጊዜ ግስ)",
    signalWords: "before, after, by the time, already, until",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I had eaten dinner before she arrived.", textAm: "እሷ ከመምጣቷ በፊት እራት በልቼ ነበር።" },
      { label: "✅ Positive", type: "pos", text: "He had already finished the work.", textAm: "እሱ ስራውን አስቀድሞ ጨርሶ ነበር።" },
      { label: "❌ Negative", type: "neg", text: "They had not left when it started raining.", textAm: "ዝናቡ ሲጀምር እነሱ አልሄዱም ነበር።" },
      { label: "❌ Negative", type: "neg", text: "She hadn't visited Paris before.", textAm: "ከዚህ በፊት ፓሪስን ጎብኝታ አታውቅም ነበር።" },
      { label: "❓ Question", type: "q", text: "Had you met him before the party?", textAm: "ከድግሱ በፊት አግኝተኸው ታውቃለህ?" },
      { label: "📝 More Examples", type: "note", text: "By the time we arrived, the movie had started.", textAm: "እኛ ስንደርስ ፊልሙ ጀምሮ ነበር።" }
    ]
  },
  {
    id: 8,
    title: "Past Perfect Continuous",
    emoji: "🔁",
    badge: "Tense",
    explanation: "Used to show that an action started in the past and continued up until another time in the past.",
    explanationAm: "ባለፈው ጊዜ ተጀምሮ እስከ ሌላ የተወሰነ ያለፈ ጊዜ ድረስ እየተከናወነ የነበረን ድርጊት ለመግለጽ ያገለግላል።",
    formula: "Subject + had + been + V-ing",
    formulaAm: "ፋርሙላ: ተሳቢ + had + been + ግስ-ing",
    signalWords: "for, since, how long, before, until",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I had been waiting for an hour before the bus arrived.", textAm: "አውቶቡሱ ከመምጣቱ በፊት ለአንድ ሰዓት ስጠብቅ ነበር።" },
      { label: "✅ Positive", type: "pos", text: "They had been working hard all day.", textAm: "እነሱ ቀኑን ሙሉ ጠንክረው እየሰሩ ነበር።" },
      { label: "❌ Negative", type: "neg", text: "She had not been feeling well before the trip.", textAm: "ከጉዞው በፊት ጥሩ ስሜት አልተሰማትም ነበር።" },
      { label: "❌ Negative", type: "neg", text: "We hadn't been paying attention.", textAm: "ትኩረት ሰጥተን አልነበረም።" },
      { label: "❓ Question", type: "q", text: "How long had you been studying before the exam?", textAm: "ከፈተናው በፊት ለምን ያህል ጊዜ እያጠናህ/ሽ ነበር?" },
      { label: "📝 More Examples", type: "note", text: "The ground was wet because it had been raining.", textAm: "ዝናብ እየዘነበ ስለነበር መሬቱ ርጥብ ነበር።" }
    ]
  },
  {
    id: 9,
    title: "Simple Future (will)",
    emoji: "🔮",
    badge: "Tense",
    explanation: "Used to express voluntary actions, promises, predictions, and on-the-spot decisions about the future.",
    explanationAm: "ስለ ወደፊቱ ጊዜ ድንገተኛ ውሳኔዎችን፣ ቃል ኪዳኖችን፣ ወይም ትንበያዎችን ለመግለጽ ያገለግላል።",
    formula: "Subject + will + V1 (base form)",
    formulaAm: "ፋርሙላ: ተሳቢ + will + V1 (ግስ ሥር)",
    signalWords: "tomorrow, next week, soon, later, in the future",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I will call you tomorrow.", textAm: "ነገ እደውልልሃለሁ/ሻለሁ።" },
      { label: "✅ Positive", type: "pos", text: "They will win the game.", textAm: "እነሱ ጨዋታውን ያሸንፋሉ።" },
      { label: "❌ Negative", type: "neg", text: "I will not (won't) forget this.", textAm: "ይህን አልረሳውም።" },
      { label: "❌ Negative", type: "neg", text: "She won't come to the meeting.", textAm: "እሷ ወደ ስብሰባው አትመጣም።" },
      { label: "❓ Question", type: "q", text: "Will you help me with this?", textAm: "በዚህ ነገር ትረዳኛለህ/ሽ?" },
      { label: "📝 More Examples", type: "note", text: "I think it will rain tomorrow. / Don't worry, I will pay.", textAm: "ነገ ዝናብ የሚዘንብ ይመስለኛል። / አትጨነቅ፣ እኔ እከፍላለሁ።" }
    ]
  },
  {
    id: 10,
    title: "Future Continuous Tense",
    emoji: "🔭",
    badge: "Tense",
    explanation: "Used to indicate an action that will be happening at a specific time in the future.",
    explanationAm: "በወደፊቱ ጊዜ በአንድ የተወሰነ ሰዓት ላይ እየተከናወነ የሚኖርን ድርጊት ለመግለጽ ያገለግላል።",
    formula: "Subject + will be + V-ing",
    formulaAm: "ፋርሙላ: ተሳቢ + will be + ግስ-ing",
    signalWords: "at this time tomorrow, at 8 PM, next week",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I will be sleeping at midnight.", textAm: "እኩለ ሌሊት ላይ ተኝቼ እሆናለሁ።" },
      { label: "✅ Positive", type: "pos", text: "She will be flying to London tomorrow.", textAm: "ነገ ወደ ለንደን እየበረረች ትሆናለች።" },
      { label: "❌ Negative", type: "neg", text: "We will not be working this weekend.", textAm: "በዚህ ቅዳሜና እሁድ እየሰራን አንሆንም።" },
      { label: "❌ Negative", type: "neg", text: "They won't be attending the party.", textAm: "እነሱ ድግሱ ላይ አይገኙም።" },
      { label: "❓ Question", type: "q", text: "Will you be using the car tomorrow?", textAm: "ነገ መኪናውን ትጠቀምበታለህ/ሽ?" },
      { label: "📝 More Examples", type: "note", text: "At this time next year, I will be living in Rome.", textAm: "በሚቀጥለው ዓመት በዚህ ጊዜ ሮም ውስጥ እየኖርኩ እሆናለሁ።" }
    ]
  },
  {
    id: 11,
    title: "Future Perfect Tense",
    emoji: "🎯",
    badge: "Tense",
    explanation: "Used to describe an action that will be completed before a specified time in the future.",
    explanationAm: "በወደፊቱ ጊዜ ከአንድ ከተወሰነ ጊዜ በፊት ተጠናቆ የሚያልቅን ድርጊት ለመግለጽ ያገለግላል።",
    formula: "Subject + will have + V3 (past participle)",
    formulaAm: "ፋርሙላ: ተሳቢ + will have + V3",
    signalWords: "by next week, by tomorrow, by the time, before",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I will have finished the report by tomorrow.", textAm: "እስከ ነገ ድረስ ሪፖርቱን ጨርሼዋለሁ።" },
      { label: "✅ Positive", type: "pos", text: "They will have built the house by next year.", textAm: "እስከሚቀጥለው ዓመት ቤቱን ገነብተው ይጨርሳሉ።" },
      { label: "❌ Negative", type: "neg", text: "She will not have arrived by 5 PM.", textAm: "እስከ ምሽቱ 11 ሰዓት ድረስ አትደርስም።" },
      { label: "❌ Negative", type: "neg", text: "We won't have eaten dinner before 8 PM.", textAm: "ከምሽቱ 2 ሰዓት በፊት እራት አንበላም።" },
      { label: "❓ Question", type: "q", text: "Will you have completed the course by June?", textAm: "እስከ ሰኔ ድረስ ትምህርቱን አጠናቀህ ትጨርሳለህ?" },
      { label: "📝 More Examples", type: "note", text: "By the time you get here, I will have left.", textAm: "አንተ እዚህ ስትደርስ፣ እኔ ሄጃለሁ።" }
    ]
  },
  {
    id: 12,
    title: "Future Perfect Continuous",
    emoji: "⏳",
    badge: "Tense",
    explanation: "Used to describe an ongoing action that will continue up to a certain point in the future. Emphasizes duration.",
    explanationAm: "ወደፊት እስከ አንድ የተወሰነ ጊዜ ድረስ ሲቀጥል የሚኖርን ድርጊት ለመግለጽ ያገለግላል። ትኩረቱ ድርጊቱ የሚወስደው ርዝማኔ ላይ ነው።",
    formula: "Subject + will have been + V-ing",
    formulaAm: "ፋርሙላ: ተሳቢ + will have been + ግስ-ing",
    signalWords: "by next year, for, by the time",
    examples: [
      { label: "✅ Positive", type: "pos", text: "By next month, I will have been working here for a year.", textAm: "በሚቀጥለው ወር፣ እዚህ መስራት ከጀመርኩ አንድ ዓመት ይሆነኛል።" },
      { label: "✅ Positive", type: "pos", text: "He will have been studying for three hours by 8 PM.", textAm: "እስከ 2 ሰዓት ድረስ ለሶስት ሰዓታት ሲያጠና ይቆያል።" },
      { label: "❌ Negative", type: "neg", text: "We will not have been waiting long.", textAm: "ለረጅም ጊዜ ስንጠብቅ አንቆይም።" },
      { label: "❌ Negative", type: "neg", text: "She won't have been living there for long.", textAm: "እዚያ ለረጅም ጊዜ ስትኖር አትቆይም።" },
      { label: "❓ Question", type: "q", text: "How long will you have been traveling by tomorrow?", textAm: "እስከ ነገ ድረስ ለምን ያህል ጊዜ ስትጓዝ ትቆያለህ?" },
      { label: "📝 More Examples", type: "note", text: "By the time he retires, he will have been teaching for 30 years.", textAm: "ጡረታ በሚወጣበት ጊዜ፣ ለ30 ዓመታት ሲያስተምር ይቆያል።" }
    ]
  },
  {
    id: 13,
    title: "Zero Conditional",
    emoji: "💧",
    badge: "Grammar",
    explanation: "Used to express general truths, scientific facts, or habits. If the condition happens, the result always happens.",
    explanationAm: "አጠቃላይ እውነታዎችን ወይም ሳይንሳዊ ሃቆችን ለመግለጽ ያገለግላል። ሁኔታው ከተፈጠረ፣ ውጤቱ ሁልጊዜ ይከሰታል።",
    formula: "If + Simple Present, Simple Present",
    formulaAm: "ፋርሙላ: If + Simple Present, Simple Present",
    signalWords: "if, when, whenever",
    examples: [
      { label: "✅ Positive", type: "pos", text: "If you heat water to 100 degrees, it boils.", textAm: "ውሃን እስከ 100 ዲግሪ ካሞቅከው ይፈላል።" },
      { label: "✅ Positive", type: "pos", text: "When the sun goes down, it gets dark.", textAm: "ፀሐይ ስትጠልቅ ይጨልማል።" },
      { label: "❌ Negative", type: "neg", text: "If you don't eat, you get hungry.", textAm: "ካላበላህ/ሽ ትርባለህ/ሽ።" },
      { label: "❓ Question", type: "q", text: "What happens if you mix red and blue?", textAm: "ቀይና ሰማያዊን ብትቀላቅል ምን ይፈጠራል?" },
      { label: "📝 More Examples", type: "note", text: "Plants die if they don't get enough water.", textAm: "ተክሎች በቂ ውሃ ካላገኙ ይሞታሉ።" }
    ]
  },
  {
    id: 14,
    title: "First Conditional",
    emoji: "🌱",
    badge: "Grammar",
    explanation: "Used to express realistic situations in the present or future. It describes what will likely happen if a condition is met.",
    explanationAm: "በአሁኑ ወይም ወደፊት ሊከሰቱ የሚችሉ እውነተኛ ሁኔታዎችን ለመግለጽ ያገለግላል። የሆነ ነገር ከተደረገ ምን ሊፈጠር እንደሚችል ያሳያል።",
    formula: "If + Simple Present, will + V1 (base form)",
    formulaAm: "ፋርሙላ: If + Simple Present, will + V1",
    signalWords: "if, unless, as soon as",
    examples: [
      { label: "✅ Positive", type: "pos", text: "If it rains tomorrow, we will stay at home.", textAm: "ነገ ዝናብ ከዘነበ፣ እቤታችን እንቆያለን።" },
      { label: "✅ Positive", type: "pos", text: "If you study hard, you will pass the exam.", textAm: "ጠንክረህ ካጠናህ ፈተናውን ታልፋለህ።" },
      { label: "❌ Negative", type: "neg", text: "If you don't hurry, you will miss the bus.", textAm: "ካልቸኮልክ አውቶቡሱ ያመልጥሃል።" },
      { label: "❓ Question", type: "q", text: "What will you do if you lose your job?", textAm: "ስራህን ብታጣ ምን ታደርጋለህ?" },
      { label: "📝 More Examples", type: "note", text: "I will call you as soon as I arrive.", textAm: "እንደደረስኩ እደውልልሃለሁ።" }
    ]
  },
  {
    id: 15,
    title: "Second Conditional",
    emoji: "💭",
    badge: "Grammar",
    explanation: "Used to express unreal, hypothetical, or improbable situations in the present or future.",
    explanationAm: "በአሁኑ ወይም ወደፊት ሊከሰቱ የማይችሉ ወይም ምናባዊ ሁኔታዎችን ለመግለጽ ያገለግላል።",
    formula: "If + Simple Past, would + V1 (base form)",
    formulaAm: "ፋርሙላ: If + Simple Past, would + V1",
    signalWords: "if, if I were you",
    examples: [
      { label: "✅ Positive", type: "pos", text: "If I won the lottery, I would buy a big house.", textAm: "ሎተሪ ብደርስ ኖሮ፣ ትልቅ ቤት እገዛ ነበር።" },
      { label: "✅ Positive", type: "pos", text: "If I had more time, I would learn Spanish.", textAm: "ተጨማሪ ጊዜ ቢኖረኝ ኖሮ፣ ስፓኒሽ እማር ነበር።" },
      { label: "❌ Negative", type: "neg", text: "If I didn't have to work, I would go to the beach.", textAm: "መስራት ባይኖርብኝ ኖሮ፣ ወደ ባህር ዳርቻ እሄድ ነበር።" },
      { label: "❓ Question", type: "q", text: "What would you do if you saw a ghost?", textAm: "መንፈስ ብታይ ኖሮ ምን ታደርግ ነበር?" },
      { label: "📝 More Examples", type: "note", text: "If I were you, I would apologize.", textAm: "እኔ በአንተ ቦታ ብሆን ኖሮ፣ ይቅርታ እጠይቅ ነበር።" }
    ]
  },
  {
    id: 16,
    title: "Third Conditional",
    emoji: "🔙",
    badge: "Grammar",
    explanation: "Used to talk about things that did not happen in the past and their imaginary results.",
    explanationAm: "ባለፈው ጊዜ ውስጥ ያልተከሰቱ ነገሮችን እና የእነሱን ምናባዊ ውጤቶች (ምነው እንዲህ በሆነ ብሎ ለመጸጸት) ለመግለጽ ያገለግላል።",
    formula: "If + Past Perfect, would have + V3",
    formulaAm: "ፋርሙላ: If + Past Perfect, would have + V3",
    signalWords: "if, would have",
    examples: [
      { label: "✅ Positive", type: "pos", text: "If I had studied harder, I would have passed the exam.", textAm: "በደንብ አጥንቼ ቢሆን ኖሮ፣ ፈተናውን አልፍ ነበር።" },
      { label: "✅ Positive", type: "pos", text: "If we had left earlier, we would have caught the train.", textAm: "ቀደም ብለን ወጥተን ቢሆን ኖሮ፣ ባቡሩን እንደርስበት ነበር።" },
      { label: "❌ Negative", type: "neg", text: "If she hadn't forgotten her umbrella, she wouldn't have gotten wet.", textAm: "ዣንጥላዋን ባትረሳ ኖሮ፣ አትርስም ነበር።" },
      { label: "❓ Question", type: "q", text: "What would you have done if you had lost your passport?", textAm: "ፓስፖርትህን አጥተህ ቢሆን ኖሮ ምን ታደርግ ነበር?" },
      { label: "📝 More Examples", type: "note", text: "I would have helped you if you had asked me.", textAm: "ጠይቀኸኝ ቢሆን ኖሮ እረዳህ ነበር።" }
    ]
  },
  {
    id: 17,
    title: "Passive Voice",
    emoji: "🎭",
    badge: "Grammar",
    explanation: "Used when the focus is on the action (the verb) and the object of the sentence, rather than who did the action.",
    explanationAm: "ትኩረቱ ድርጊቱን በፈጸመው አካል ላይ ሳይሆን በተፈጸመው ድርጊት ወይም በተቀባዩ ላይ ሲሆን ያገለግላል (ተገብሮ ግስ)።",
    formula: "Object + be + V3 (past participle)",
    formulaAm: "ፋርሙላ: ተደራጊ + be + V3",
    signalWords: "by (someone), is made, was built",
    examples: [
      { label: "✅ Positive", type: "pos", text: "The house was built in 1990.", textAm: "ቤቱ በ1990 ተገነባ።" },
      { label: "✅ Positive", type: "pos", text: "English is spoken all over the world.", textAm: "እንግሊዝኛ በመላው ዓለም ይነገራል።" },
      { label: "❌ Negative", type: "neg", text: "The letter has not been sent yet.", textAm: "ደብዳቤው ገና አልተላከም።" },
      { label: "❓ Question", type: "q", text: "Was the window broken by the children?", textAm: "መስኮቱ የተሰበረው በልጆቹ ነው?" },
      { label: "📝 More Examples", type: "note", text: "My car is being repaired. / The book was written by Jane Austen.", textAm: "መኪናዬ እየተጠገነ ነው። / መጽሐፉ የተጻፈው በጄን ኦስተን ነው።" }
    ]
  },
  {
    id: 18,
    title: "Reported Speech",
    emoji: "🗣️",
    badge: "Grammar",
    explanation: "Used to communicate what someone else said without using their exact words (indirect speech). Tenses usually shift back.",
    explanationAm: "ሌላ ሰው የተናገረውን ነገር ቀጥታ ቃላቱን ሳንጠቀም ለሌላ ሰው ለማስተላለፍ ያገለግላል። ግሶቹ ወደ ኃላፊ ጊዜ ይቀየራሉ።",
    formula: "Subject + said/told + (that) + Clause (shifted back)",
    formulaAm: "ፋርሙላ: ተሳቢ + said/told + (that) + ሃሳብ (በኃላፊ)",
    signalWords: "said, told, asked, admitted",
    examples: [
      { label: "✅ Positive", type: "pos", text: "He said that he was tired.", textAm: "እንደደከመው ተናገረ። (ቀጥታ: I am tired)" },
      { label: "✅ Positive", type: "pos", text: "She told me that she had bought a car.", textAm: "መኪና እንደገዛች ነገረችኝ።" },
      { label: "❌ Negative", type: "neg", text: "He said he didn't like the food.", textAm: "ምግቡን እንዳልወደደው ተናገረ።" },
      { label: "❓ Question", type: "q", text: "She asked if I spoke English.", textAm: "እንግሊዝኛ እናገር እንደሆነ ጠየቀችኝ።" },
      { label: "📝 More Examples", type: "note", text: "They said they would come later.", textAm: "በኋላ እንደሚመጡ ተናገሩ።" }
    ]
  },
  {
    id: 19,
    title: "Articles (a, an, the)",
    emoji: "🅰️",
    badge: "Grammar",
    explanation: "Articles are used before nouns. 'A/An' are indefinite (any one), and 'The' is definite (a specific one).",
    explanationAm: "ከስሞች በፊት ይገባሉ። 'A/An' ለማንኛውም አንድ ነገር ሲያገለግሉ፣ 'The' ደግሞ የተወሰነ እና የታወቀን ነገር ያመለክታል።",
    formula: "a/an + unspecified singular noun, the + specific noun",
    formulaAm: "ፋርሙላ: a/an + ላልተወሰነ ስም, the + ለታወቀ ስም",
    signalWords: "a, an, the",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I bought a new book yesterday.", textAm: "ትናንት አዲስ መጽሐፍ ገዛሁ።" },
      { label: "✅ Positive", type: "pos", text: "She is an engineer.", textAm: "እሷ መሃንዲስ ናት።" },
      { label: "✅ Positive", type: "pos", text: "The sun is very hot today.", textAm: "ፀሐይዋ ዛሬ በጣም ትኩስ ናት።" },
      { label: "❌ Negative", type: "neg", text: "I don't have a pen.", textAm: "እስክሪብቶ የለኝም።" },
      { label: "📝 More Examples", type: "note", text: "The car I bought is blue. (Specific car)", textAm: "የገዛሁት መኪና ሰማያዊ ነው። (የተወሰነ መኪና)" }
    ]
  },
  {
    id: 20,
    title: "Prepositions of Time",
    emoji: "📅",
    badge: "Grammar",
    explanation: "Used to indicate when an event happens. 'In' for months/years, 'On' for days, 'At' for exact times.",
    explanationAm: "አንድ ድርጊት መቼ እንደተከናወነ ለማሳየት ያገለግላሉ። 'In' ለወራት/ለዓመታት፣ 'On' ለቀናት፣ 'At' ለተወሰነ ሰዓት።",
    formula: "in (months/years), on (days/dates), at (times)",
    formulaAm: "ፋርሙላ: in(ወር/ዓመት), on(ቀን), at(ሰዓት)",
    signalWords: "in, on, at",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I was born in 1995.", textAm: "በ1995 ተወለድኩ።" },
      { label: "✅ Positive", type: "pos", text: "The meeting is on Monday.", textAm: "ስብሰባው ሰኞ ዕለት ነው።" },
      { label: "✅ Positive", type: "pos", text: "The class starts at 8:00 AM.", textAm: "ትምህርቱ ከጠዋቱ 2 ሰዓት ይጀምራል።" },
      { label: "❌ Negative", type: "neg", text: "I don't work on Sundays.", textAm: "እሁድ እሁድ አልሰራም።" },
      { label: "📝 More Examples", type: "note", text: "In the morning / On December 25th / At night", textAm: "በጠዋት / ታህሳስ 25 ቀን / በማታ" }
    ]
  },
  {
    id: 21,
    title: "Prepositions of Place",
    emoji: "📍",
    badge: "Grammar",
    explanation: "Used to show where something is located. 'In' (inside), 'On' (surface), 'At' (specific point).",
    explanationAm: "አንድ ነገር የት እንደሚገኝ ያሳያሉ። 'In' (ውስጥ)፣ 'On' (ላይ/ገጽ ላይ)፣ 'At' (የተወሰነ ቦታ ላይ)።",
    formula: "in (spaces), on (surfaces), at (points)",
    formulaAm: "ፋርሙላ: in(ውስጥ), on(ላይ), at(ቦታ ላይ)",
    signalWords: "in, on, at, under, behind",
    examples: [
      { label: "✅ Positive", type: "pos", text: "The keys are on the table.", textAm: "ቁልፎቹ ጠረጴዛው ላይ ናቸው።" },
      { label: "✅ Positive", type: "pos", text: "She lives in London.", textAm: "እሷ ለንደን ውስጥ ትኖራለች።" },
      { label: "✅ Positive", type: "pos", text: "Someone is at the door.", textAm: "አንድ ሰው በሩ ላይ ቆሟል።" },
      { label: "❌ Negative", type: "neg", text: "The book is not in my bag.", textAm: "መጽሐፉ ቦርሳዬ ውስጥ የለም።" },
      { label: "📝 More Examples", type: "note", text: "The cat is under the bed. / The bank is next to the pharmacy.", textAm: "ድመቷ አልጋው ስር ነች። / ባንኩ ከፋርማሲው አጠገብ ነው።" }
    ]
  },
  {
    id: 22,
    title: "Modal Verbs",
    emoji: "💪",
    badge: "Grammar",
    explanation: "Helper verbs used to express ability, permission, obligation, or possibility (can, could, should, must, might).",
    explanationAm: "ችሎታን፣ ፈቃድን፣ ግዴታን ወይም ሊሆን የሚችልን ነገር ለመግለጽ የሚረዱ ረዳት ግሶች ናቸው (ለምሳሌ፡ can, must, should)።",
    formula: "Subject + modal verb + V1 (base form)",
    formulaAm: "ፋርሙላ: ተሳቢ + modal verb + V1 (ግስ ሥር)",
    signalWords: "can, could, should, must, may, might",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I can speak Amharic and English.", textAm: "አማርኛ እና እንግሊዝኛ መናገር እችላለሁ።" },
      { label: "✅ Positive", type: "pos", text: "You must wear a seatbelt.", textAm: "የመቀመጫ ቀበቶ ማሰር አለብህ።" },
      { label: "❌ Negative", type: "neg", text: "You should not eat too much sugar.", textAm: "በጣም ብዙ ስኳር መብላት የለብህም።" },
      { label: "❓ Question", type: "q", text: "May I go to the bathroom?", textAm: "ወደ መጸዳጃ ቤት መሄድ እችላለሁ?" },
      { label: "📝 More Examples", type: "note", text: "It might rain today. / Could you help me?", textAm: "ዛሬ ዝናብ ሊዘንብ ይችላል። / ልትረዳኝ ትችላለህ?" }
    ]
  },
  {
    id: 23,
    title: "Gerunds vs Infinitives",
    emoji: "🏃",
    badge: "Grammar",
    explanation: "Gerunds are verbs ending in '-ing' acting as nouns. Infinitives are 'to + verb'. Some verbs take gerunds, others take infinitives.",
    explanationAm: "Gerund (ግስ+ing) እንደ ስም የሚያገለግል ሲሆን፣ Infinitive (to+ግስ) ነው። አንዳንድ ግሶች gerund ይከተላቸዋል፣ ሌሎች ደግሞ infinitive ይከተላቸዋል።",
    formula: "V-ing (Gerund) / to + V1 (Infinitive)",
    formulaAm: "ፋርሙላ: ግስ-ing / to + V1",
    signalWords: "enjoy/avoid (+ing), want/decide (+to)",
    examples: [
      { label: "✅ Positive", type: "pos", text: "I enjoy reading books.", textAm: "መጽሐፍ ማንበብ ደስ ይለኛል። (Gerund)" },
      { label: "✅ Positive", type: "pos", text: "She decided to study abroad.", textAm: "ውጭ አገር ለመማር ወሰነች። (Infinitive)" },
      { label: "❌ Negative", type: "neg", text: "He avoids talking to strangers.", textAm: "ከማያውቃቸው ሰዎች ጋር ማውራትን ያስወግዳል።" },
      { label: "❓ Question", type: "q", text: "Do you want to come with us?", textAm: "ከእኛ ጋር መምጣት ትፈልጋለህ?" },
      { label: "📝 More Examples", type: "note", text: "Swimming is good for health. / I promised to help.", textAm: "ዋና ለጤና ጥሩ ነው። / ለመርዳት ቃል ገብቻለሁ።" }
    ]
  },
  {
    id: 24,
    title: "Relative Clauses",
    emoji: "🔗",
    badge: "Grammar",
    explanation: "Used to give additional information about a noun without starting a new sentence. Uses who, which, that, where.",
    explanationAm: "አዲስ አረፍተ ነገር ሳንጀምር ስለ አንድ ስም ተጨማሪ መረጃ ለመስጠት ያገለግላል። (who, which, that ይጠቀማል)።",
    formula: "Noun + relative pronoun (who/which/that) + clause",
    formulaAm: "ፋርሙላ: ስም + who/which/that + ሃሳብ",
    signalWords: "who, whom, whose, which, that, where",
    examples: [
      { label: "✅ Positive", type: "pos", text: "The man who lives next door is a doctor.", textAm: "ጎረቤት የሚኖረው ሰው ዶክተር ነው።" },
      { label: "✅ Positive", type: "pos", text: "The book that I bought is interesting.", textAm: "የገዛሁት መጽሐፍ አስደሳች ነው።" },
      { label: "❌ Negative", type: "neg", text: "This is not the place where we met.", textAm: "ይህ የተገናኘንበት ቦታ አይደለም።" },
      { label: "❓ Question", type: "q", text: "Is this the car which you want to sell?", textAm: "ልትሸጠው የምትፈልገው መኪና ይሄ ነው?" },
      { label: "📝 More Examples", type: "note", text: "The girl whose phone was stolen is crying.", textAm: "ስልኳ የተሰረቀባት ልጅ እያለቀሰች ነው።" }
    ]
  },
  {
    id: 25,
    title: "Subject-Verb Agreement",
    emoji: "🤝",
    badge: "Grammar",
    explanation: "The subject and verb must agree in number. A singular subject takes a singular verb, and a plural subject takes a plural verb.",
    explanationAm: "ተሳቢው እና ግሱ በቁጥር መስማማት አለባቸው። ነጠላ ተሳቢ ነጠላ ግስ ይወስዳል፣ ብዙ ተሳቢ ብዙ ግስ ይወስዳል።",
    formula: "Singular Subject -> Singular Verb / Plural Subject -> Plural Verb",
    formulaAm: "ፋርሙላ: ነጠላ ተሳቢ -> ነጠላ ግስ / ብዙ ተሳቢ -> ብዙ ግስ",
    signalWords: "is/are, was/were, has/have, s/es",
    examples: [
      { label: "✅ Positive", type: "pos", text: "The dog barks loudly.", textAm: "ውሻው በከፍተኛ ድምጽ ይጮሃል። (Singular)" },
      { label: "✅ Positive", type: "pos", text: "The dogs bark loudly.", textAm: "ውሾቹ በከፍተኛ ድምጽ ይጮሃሉ። (Plural)" },
      { label: "❌ Negative", type: "neg", text: "He doesn't know the answer.", textAm: "እሱ መልሱን አያውቅም። (He don't ስህተት ነው)" },
      { label: "❓ Question", type: "q", text: "Are the students ready?", textAm: "ተማሪዎቹ ዝግጁ ናቸው?" },
      { label: "📝 More Examples", type: "note", text: "Everyone is here. (Everyone takes a singular verb)", textAm: "ሁሉም ሰው እዚህ ነው።" }
    ]
  }
];
