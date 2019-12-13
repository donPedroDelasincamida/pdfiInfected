#include "pdfHexPdf.hpp"

#include <bitset>
#include <fstream>
#include <iterator>
#include <algorithm>
#include <iostream>
#include <vector>


using namespace std;

void decodeHexToPdf(string hexString, string path="./output.pdf"){
    
    int length = hexString.length(); 
    std::string realFile; 

    // stores the real file in the string 'realFile'
    for(int i=0; i< length; i+=2)
    {
        string byte = hexString.substr(i,2);
        char chr = (char) (int)strtol(byte.c_str(), NULL, 16);
        realFile.push_back(chr);
    }

    // writes the file 
    ofstream output;
    output.open(path);
    output << realFile;
    output.close();

}