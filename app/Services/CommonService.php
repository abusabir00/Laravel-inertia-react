<?php

namespace App\Services;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Env;

class CommonService
{
    public static function generateReferralToken($referralCode) {
        //env app_key
        $encryptionKey = Env::get('APP_KEY');
        $iv = random_bytes(openssl_cipher_iv_length('aes-256-cbc'));
        $encrypted = openssl_encrypt($referralCode, 'aes-256-cbc', $encryptionKey, 0, $iv);
        // Combine IV with encrypted data, then encode to make it URL-safe
        return urlencode(base64_encode($iv . $encrypted));
    }
    
    public static function decryptReferralToken($token) {
        $encryptionKey = Env::get('APP_KEY');
        $decodedData = base64_decode(urldecode($token));
        $ivLength = openssl_cipher_iv_length('aes-256-cbc');

        // Extract IV and encrypted data
        $iv = substr($decodedData, 0, $ivLength);
        $encrypted = substr($decodedData, $ivLength);
    
        return openssl_decrypt($encrypted, 'aes-256-cbc', $encryptionKey, 0, $iv);
    }
}
