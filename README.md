# Multiline text field for Laravel Nova 4

This package provides an index and detail field for printing multiple lines.

Example 1:

```
MultiLineText::make('Kenmerken', function () {
    $lines[] = [
        'text' => 'Title here',
        'class' => 'font-bold',
    ];
    
    $lines[] = [
        'text' => 'Normal line here',
        'class' => 'font-normal',
    ];

    return $lines;
});
```

Example 2:

```
MultiLineText::make('Kenmerken', function () {
    $lines[] = [
        'text' => 'Title here',
        'class' => 'font-bold',
    ];
    foreach ($this->relation as $item) {
        $lines[] = [
            'text' => $item->value,
            'class' => 'font-normal',
        ];
    }

    return $lines;
}),
```
