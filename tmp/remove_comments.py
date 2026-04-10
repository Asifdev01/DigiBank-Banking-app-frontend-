import os
import re

def remove_comments(text):
    def replacer(match):
        s = match.group(0)
        if s.startswith('/'):
            return ""
        else:
            return s
    pattern = r'(\"(?:\\.|[^\"\\])*\"|\'(?:\\.|[^\'\\])*\'|`(?:\\.|[^`\\])*`)|(/\*[\s\S]*?\*/|//.*$)'
    return re.sub(pattern, lambda m: m.group(1) if m.group(1) else "", text, flags=re.MULTILINE)

target_dirs = ['app', 'components']
for target in target_dirs:
    full_path = os.path.join(os.getcwd(), target)
    if not os.path.exists(full_path):
        continue
    for root, dirs, files in os.walk(full_path):
        for file in files:
            if file.endswith(('.ts', '.tsx')):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                new_content = remove_comments(content)
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Cleaned {path}")
