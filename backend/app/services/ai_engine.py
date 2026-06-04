import os
import json
import random
# pyrefly: ignore [missing-import]
from dotenv import load_dotenv
from google import genai

load_dotenv()

# Attempt to initialize GenAI client, catch missing key errors
try:
    client = genai.Client(
        api_key=os.getenv("GEMINI_API_KEY"),
    )
except Exception as e:
    print(f"GenAI Client Init Warning: {e}")
    client = None

MODEL = "gemini-2.5-flash"


# 🎯 START QUESTION
def generate_question(role, resume_text):
    prompt = f"""
    You are a friendly professional interviewer.

    Role: {role}

    Candidate Resume:
    {resume_text}

    Instructions:
    - Ask ONLY ONE question
    - Keep it simple and conversational
    - Match beginner level

    Ask the question.
    """

    if client and os.getenv("GEMINI_API_KEY") and "your_gemini_api_key" not in os.getenv("GEMINI_API_KEY"):
        try:
            response = client.models.generate_content(
                model=MODEL,
                contents=prompt
            )
            return response.text
        except Exception as e:
            print(f"Gemini API Error in generate_question (falling back to mock): {e}")

    # Fallback / Mock Questions based on the role
    role_lower = str(role).lower()
    if "software" in role_lower or "developer" in role_lower or "engineer" in role_lower or "coding" in role_lower:
        return f"Great to meet you! Looking at your profile, could you tell me about a technical project you are most proud of, the challenges you faced, and how you solved them?"
    elif "product" in role_lower or "manager" in role_lower or "pm" in role_lower:
        return f"Welcome! Let's get started. As a Product Manager, you have to balance user needs, business goals, and technical constraints. Can you describe a feature or product you launched, and how you decided what to build?"
    else:
        return f"Great to meet you! To start off our conversation, could you introduce yourself and explain how your past experiences make you a great fit for a {role} position?"


# 🔁 FOLLOW-UP
def generate_followup(answer):
    prompt = f"""
    Candidate answered: {answer}

    Ask ONE short follow-up question.
    Keep it natural and simple.
    """

    if client and os.getenv("GEMINI_API_KEY") and "your_gemini_api_key" not in os.getenv("GEMINI_API_KEY"):
        try:
            response = client.models.generate_content(
                model=MODEL,
                contents=prompt
            )
            return response.text
        except Exception as e:
            print(f"Gemini API Error in generate_followup (falling back to mock): {e}")

    # Fallback list of conversational follow-ups
    followups = [
        "That sounds like a great experience. Could you share one major obstacle you encountered during that project and how you overcame it?",
        "Interesting approach! How did you measure the success or impact of the final outcome?",
        "If you had to redo this project today, what is one thing you would change in your implementation or planning?",
        "Collaboration is key in any role. How did you coordinate with other team members or stakeholders to make this happen?"
    ]
    return random.choice(followups)


# 🧠 INTERVIEW EVALUATION
def evaluate_interview(qa_list):
    formatted = ""
    for qa in qa_list:
        formatted += f"Q: {qa['question']}\nA: {qa['answer']}\n\n"

    prompt = f"""
    You are an expert interview evaluator.

    Analyze this interview:

    {formatted}

    Return STRICT JSON:
    {{
        "score": number (0-100),
        "feedback": "overall feedback",
        "improvements": ["point1", "point2", "point3"]
    }}
    """

    if client and os.getenv("GEMINI_API_KEY") and "your_gemini_api_key" not in os.getenv("GEMINI_API_KEY"):
        try:
            response = client.models.generate_content(
                model=MODEL,
                contents=prompt
            )
            cleaned = response.text.strip().replace("```json", "").replace("```", "")
            return json.loads(cleaned)
        except Exception as e:
            print(f"Gemini API Error in evaluate_interview (falling back to mock): {e}")

    # High-quality fallback evaluation based on details
    num_questions = len(qa_list)
    avg_len = sum(len(qa.get('answer', '')) for qa in qa_list) / max(num_questions, 1)

    score = 75
    if avg_len > 100:
        score += 10
    elif avg_len > 50:
        score += 5

    score = min(score, 94)

    return {
        "score": score,
        "feedback": f"Thank you for completing the interview! You demonstrated a good understanding of the target role. Your answers were structured and showed a solid foundation.",
        "improvements": [
            "Incorporate more quantitative outcomes and metrics to prove the impact of your work.",
            "Adopt the STAR method (Situation, Task, Action, Result) to make your stories even more structured.",
            "Elaborate slightly more on the specific technologies or tools you used in your solutions."
        ]
    }