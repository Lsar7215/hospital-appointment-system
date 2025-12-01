<?php
// Script to format PHP files in admin/ directory per user request.
// - Remove commented-out code lines (heuristic)
// - Add a space before '(' and '[' for readability
// - Replace tabs with 4 spaces and collapse multiple blank lines

$dir = __DIR__ . '/../admin';

$files = glob($dir . '/*.php');
foreach ($files as $file) {
    $orig = file_get_contents($file);
    $text = $orig;

    // 1) Remove single-line comments that look like leftover code
    // Heuristic: lines that start with // and contain characters typical of code
    $text = preg_replace("~^[ \t]*//.*[;=\->\(\)\[\]\{\}\\] .*\r?\n~m", "", $text);
    $text = preg_replace("~^[ \t]*//.*[;=\->\(\)\[\]\{\}]\s*$~m", "", $text);

    // 2) Remove block comments that contain code-like tokens
    $text = preg_replace_callback("~/\*.*?\*/~s", function ($m) {
        if (preg_match('/[;=\->\\(\\)\[\]functionreturn]/i', $m[0])) {
            return ""; // drop blocks that look like code
        }
        return $m[0];
    }, $text);

    // 3) Add space before ( and [ when appropriate
    // Avoid adding space when previous char is a space or start of string
    $text = preg_replace('/([^\s])\(/', '$1 (', $text);
    $text = preg_replace('/([^\s])\[/', '$1 [', $text);

    // 4) Normalize control structures: ensure space after keywords like if, for, foreach, while, switch, else
    $keywords = ['if','for','foreach','while','switch','elseif','else if','else','return','function'];
    foreach ($keywords as $kw) {
        $pattern = '/\b' . preg_quote($kw, '/') . '\s*\(/i';
        $text = preg_replace($pattern, $kw . ' (', $text);
    }

    // 5) Replace tabs with 4 spaces
    $text = str_replace("\t", str_repeat(' ', 4), $text);

    // 6) Collapse more than two consecutive blank lines to two
    $text = preg_replace("/\n{3,}/", "\n\n", $text);

    // 7) Trim trailing whitespace on lines
    $lines = explode("\n", $text);
    foreach ($lines as &$ln) {
        $ln = rtrim($ln);
    }
    $text = implode("\n", $lines);

    if ($text !== $orig) {
        // create a backup
        copy($file, $file . '.bak');
        file_put_contents($file, $text);
        echo "Formatted: $file\n";
    } else {
        echo "No changes: $file\n";
    }
}

echo "Done. Backups created with .bak suffix.\n";

?>
