<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('auth/register');
})->name('home');

Route::get('/login', function () {
    return Inertia::render('auth/login', [
        'canResetPassword' => true, // Enable password reset
        'status' => session('status'),
    ]);
})->name('login');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';