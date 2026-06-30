<?php
/**
 * Contact form handler — uploads with static site to public_html/api/
 * Edit $TO_EMAIL before going live.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

// ── تنظیمات — قبل از دیپلوی ایمیل مقصد را عوض کنید ──
$TO_EMAIL = 'info@tajhub.ir';
$FROM_EMAIL = 'noreply@tajhub.ir';
$SUBJECT_PREFIX = 'درخواست تماس — تاج هاب';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed'], JSON_UNESCAPED_UNICODE);
    exit;
}

function respond(int $code, bool $ok, string $message): void
{
    http_response_code($code);
    echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function clean(string $value, int $max = 500): string
{
    $value = trim($value);
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = strip_tags($value);
    if (mb_strlen($value) > $max) {
        $value = mb_substr($value, 0, $max);
    }
    return $value;
}

// Honeypot — bots fill this hidden field
$honeypot = clean($_POST['website'] ?? '', 100);
if ($honeypot !== '') {
    respond(200, true, 'درخواست شما ثبت شد.');
}

$name = clean($_POST['name'] ?? '', 120);
$phone = clean($_POST['phone'] ?? '', 30);
$email = clean($_POST['email'] ?? '', 120);
$building = clean($_POST['building'] ?? '', 120);
$message = clean($_POST['message'] ?? '', 2000);

if ($name === '' || $phone === '') {
    respond(400, false, 'نام و شماره تماس الزامی است.');
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, false, 'ایمیل واردشده معتبر نیست.');
}

$subject = $SUBJECT_PREFIX . ' — ' . $name;

$body = "درخواست تماس جدید از سایت تاج هاب\n";
$body .= "────────────────────────────\n\n";
$body .= "نام: {$name}\n";
$body .= "تلفن: {$phone}\n";
$body .= "ایمیل: " . ($email !== '' ? $email : '—') . "\n";
$body .= "ساختمان: " . ($building !== '' ? $building : '—') . "\n\n";
$body .= "پیام:\n" . ($message !== '' ? $message : '—') . "\n\n";
$body .= "────────────────────────────\n";
$body .= 'زمان: ' . date('Y-m-d H:i:s') . "\n";
$body .= 'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: TAJ HUB <' . $FROM_EMAIL . '>',
];

if ($email !== '') {
    $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
}

$sent = @mail($TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if (!$sent) {
    respond(500, false, 'ارسال ناموفق بود. لطفاً مستقیماً با ما تماس بگیرید.');
}

respond(200, true, 'درخواست شما ثبت شد.');
