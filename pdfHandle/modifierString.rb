#
# This script turns a pdf to a C++ string
# Param 0 is the PDF
# Param 1 is the output path 
#

param = ARGV
if param[1] == ""
  output = "output.cpp" 
else
  output = param[1]
end

text=File.open(param[0]).read
x=''
text.each_line do |line|
  x+=line
end

tab=x.unpack("H*")
print tab
open('output/file.cpp', 'w'){ |f|
    f.puts "#include <string>"
    f.puts "std::string fichierpdf = " + "\"" + tab[0] + "\";"
}

