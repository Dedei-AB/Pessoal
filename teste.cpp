#include <iostream>

void numerosPrimos() {
    for (int i = 3; i > 0; i--) {
        bool primo = true;
        for (int j = 2; j < i; j++) {
            if (i % j == 0) {
                primo = false;
                break; // Se não for primo, não precisa continuar verificando
            }
        }
        if (primo) {
            std::cout << i << std::endl;
        }
    }
}

int main() {
    numerosPrimos();
    return 0;
}
