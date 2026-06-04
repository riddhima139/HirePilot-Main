import PyPDF2

def extract_text_from_pdf(file_path):
    text = ""

    with open(file_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)

        for page in reader.pages:
            extracted = page.extract_text()
            if extracted:
                text += extracted + "\n"

    # Clean text and sanitize Unicode characters that Windows charmap can't handle
    text = text.replace("\n", " ").replace("  ", " ")

    # Encode to UTF-8 then decode back, replacing characters that can't be processed
    text = text.encode("utf-8", errors="ignore").decode("utf-8", errors="ignore")

    # Strip any remaining non-ASCII characters that could cause codec issues
    text = text.encode("ascii", errors="ignore").decode("ascii")

    return text