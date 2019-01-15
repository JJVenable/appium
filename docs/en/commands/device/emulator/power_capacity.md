[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/device/emulator/power_capacity.yml)
# Emulate power capacity

Emulate power capacity change on the connected emulator.
[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/device/emulator/power_capacity.yml)
## Example Usage

```java
// Java
driver.setPowerCapacity(100);

```

```python
# Not supported
```

```javascript
// Not supported
// Not supported
```

```ruby
# Ruby
# ruby_lib example
set_power_capacity 50

# ruby_lib_core example
@driver.set_power_capacity 50

```

```php
// Not supported
```

```csharp
// Not supported
```

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/device/emulator/power_capacity.yml)
## Description

For Android emulator.
To set the battery percentage.


[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/device/emulator/power_capacity.yml)
## Support

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/device/emulator/power_capacity.yml)
### Appium Server

|Platform|Driver|Platform Versions|Appium Version|Driver Version|
|--------|----------------|------|--------------|--------------|
| iOS | [XCUITest](/docs/en/drivers/ios-xcuitest.md) | None | None | None |
|  | [UIAutomation](/docs/en/drivers/ios-uiautomation.md) | None | None | None |
| Android | [Espresso](/docs/en/drivers/android-espresso.md) | ?+ | 1.9.0+ | All |
|  | [UiAutomator2](/docs/en/drivers/android-uiautomator2.md) | ?+ | 1.6.0+ | All |
|  | [UiAutomator](/docs/en/drivers/android-uiautomator.md) | 4.2+ | All | All |
| Mac | [Mac](/docs/en/drivers/mac.md) | None | None | None |
| Windows | [Windows](/docs/en/drivers/windows.md) | None | None | None |


[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/device/emulator/power_capacity.yml)
### Appium Clients

|Language|Support|Documentation|
|--------|-------|-------------|
|[Java](https://github.com/appium/java-client/releases/latest)| All | [appium.github.io](https://appium.github.io/java-client/) |
|[Python](https://github.com/appium/python-client/releases/latest)| None |  |
|[Javascript (WebdriverIO)](http://webdriver.io/index.html)| None |  |
|[Javascript (WD)](https://github.com/admc/wd/releases/latest)| None |  |
|[Ruby](https://github.com/appium/ruby_lib/releases/latest)| All | [www.rubydoc.info](https://www.rubydoc.info/github/appium/ruby_lib_core/master/Appium/Core/Android/Device/Emulator#set_power_capacity-instance_method) |
|[PHP](https://github.com/appium/php-client/releases/latest)| None |  |
|[C#](https://github.com/appium/appium-dotnet-driver/releases/latest)| None |  |

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/device/emulator/power_capacity.yml)
## HTTP API Specifications

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/device/emulator/power_capacity.yml)
### Endpoint

`POST /session/:session_id/appium/device/power_capacity`

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/device/emulator/power_capacity.yml)
### URL Parameters

|name|description|
|----|-----------|
|session_id|ID of the session to route the command to|

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/device/emulator/power_capacity.yml)
### JSON Parameters

|name|type|description|
|----|----|-----------|
| percent | `integer` | ercentage value in range [0, 100] |

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/device/emulator/power_capacity.yml)
### Response

null

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/device/emulator/power_capacity.yml)
## See Also

* [JSONWP Specification](https://github.com/appium/appium-base-driver/blob/master/lib/protocol/routes.js#L394)